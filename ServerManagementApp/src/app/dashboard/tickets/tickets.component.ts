import { Component } from '@angular/core';
import { AddTicketComponent } from "./add-ticket/add-ticket.component";

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css',
    imports: [AddTicketComponent]
})
export class TicketsComponent {

}
