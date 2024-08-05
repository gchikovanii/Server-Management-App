import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
    selector: 'app-add-ticket',
    standalone: true,
    templateUrl: './add-ticket.component.html',
    styleUrl: './add-ticket.component.css',
    imports: [ButtonComponent, ControlComponent]
})
export class AddTicketComponent {

}
