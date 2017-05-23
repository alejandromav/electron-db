import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    menu = [
        { icon: 'lnr-database', text: 'Datasources' },
        { icon: 'lnr-power', text: 'Query' },
        { icon: 'lnr-cog', text: 'Ajustes' }, //hammer-wrench
        { icon: 'lnr-notification-circle',     text: 'Acerca de' }
    ];

    constructor() { }

    ngOnInit() {

    }

}
