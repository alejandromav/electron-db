import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.scss']
})
export class QueryComponent {

    constructor(
        private router: Router
    ) { }

    navigateTo(path) {
        this.router.navigate([path]);
    }

}
