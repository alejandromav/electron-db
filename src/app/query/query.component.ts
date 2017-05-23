import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var CodeFlask: any;

@Component({
    selector: 'app-query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

    constructor(
        private router: Router
    ) { 
    }

    ngOnInit () {
        var flask = new CodeFlask;
        flask.run('#my-code-wrapper', { language: 'sql', lineNumbers: true })
    }

    navigateTo(path) {
        this.router.navigate([path]);
    }

}
