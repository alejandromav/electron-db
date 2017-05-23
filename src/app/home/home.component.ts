import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    menu = [
        { icon: 'lnr-database', text: 'Datasources', path: '/datasources' },
        { icon: 'lnr-power', text: 'Query', path: '/query' },
        { icon: 'lnr-cog', text: 'Ajustes', path: '/settings' }, //hammer-wrench
        { icon: 'lnr-notification-circle', text: 'Acerca de', path: '/about' }
    ];

    constructor(
        private router: Router
    ) { }

    navigateTo(path) {
        this.router.navigate([path]);
    }

}
