import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DatasourcesService } from './../services/datasources.service';
import { Datasource } from './../classes/datasource';
import { DatasourceEnum } from './../classes/datasource-enum';

@Component({
    selector: 'app-datasources',
    templateUrl: './datasources.component.html',
    styleUrls: ['./datasources.component.scss']
})
export class DatasourcesComponent implements OnInit {
    datasources: Datasource[];

    constructor(
        private router: Router,
        private datasourcesService: DatasourcesService
    ) { }

    ngOnInit() {
        this.datasourcesService.getDatasources()
        .then(ds => this.datasources = ds);

        // setTimeout(() => {
        //     this.datasourcesService.addDatasource({
        //         type: 'mysql' as DatasourceEnum,
        //         name: 'Drive PRE',
        //         uri: '10.101.58.114:3006',
        //         user: 'usergrid',
        //         password: 'foo'
        //     } as Datasource);
        // }, 1000);
    }

    navigateTo(path) {
        this.router.navigate([path]);
    }
   
}
