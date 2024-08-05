import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.css'
})
export class AddTicketComponent {

}
