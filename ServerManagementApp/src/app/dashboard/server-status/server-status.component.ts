import { Component,  DestroyRef,  effect,  inject,  OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  constructor(){
    effect(() => console.log(this.currentStatus()));
  }
  private destroyRef? = inject(DestroyRef);
  
  ngOnInit(): void {
    const interval = setInterval(() => {
      const randomNumber = Math.random();
      if(randomNumber < 0.5){
        this.currentStatus.set('online');
      }
      else if(randomNumber < 0.9){
        this.currentStatus.set('offline');
      }
      else{
        this.currentStatus.set('unknown');
      }
    }, 5000)
    this.destroyRef?.onDestroy(() => {
      clearInterval(interval);
    })
  }

}
