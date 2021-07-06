import {Component, OnInit} from '@angular/core';
import {MasterDataService} from '../api/master-data.service';

@Component({
    selector: 'app-master-data-service',
    templateUrl: './master-data-service.component.html',
    styleUrls: ['./master-data-service.component.scss']
})
export class MasterDataServiceComponent implements OnInit {

    constructor(
        private masterDataService: MasterDataService
    ) {
    }

    ngOnInit(): void {
        this.masterDataService.getData()
            .subscribe(
                (res) => {
                    console.log(res);
                }, (error) => {
                    console.log(error);
                }
            );
    }

}
