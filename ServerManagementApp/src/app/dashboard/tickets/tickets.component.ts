import { Component } from '@angular/core';
import { AddTicketComponent } from "./add-ticket/add-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css',
    imports: [AddTicketComponent, TicketComponent]
})
export class TicketsComponent {
    tickets : Ticket[]  = [];

    add(ticketData: { title:string,request: string}){
        const ticket :Ticket = {
            title: ticketData.title,
            request: ticketData.request,
            id: Math.random().toString(),
            status: 'open'
        };
        this.tickets.push(ticket);
    } 
    closeTicket(id: string){
        this.tickets = this.tickets.map((ticket) => {
            if(ticket.id === id){
                return {...ticket,status: 'closed'}
            }
            return ticket;
        });
    }
}
