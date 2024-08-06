import { Component, ElementRef, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-add-ticket',
    standalone: true,
    templateUrl: './add-ticket.component.html',
    styleUrl: './add-ticket.component.css',
    imports: [ButtonComponent, ControlComponent, FormsModule]
})
export class AddTicketComponent {
    private form = viewChild<ElementRef<HTMLFormElement>>('form');

    sendData = output<{title:string,request: string}>();


    onSubmit(title: string, request: string){
    //Clrear form 
    this.sendData.emit({title,request});
    this.form()?.nativeElement.reset(); 
   }  
}
