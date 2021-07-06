import { Component, OnInit } from '@angular/core';
import {MasterDataService} from '../../../core/services/api/master-data.service';

@Component({
  selector: 'app-appointment-status',
  templateUrl: './appointment-status.component.html',
  styleUrls: ['./appointment-status.component.scss']
})
export class AppointmentStatusComponent implements OnInit {

  constructor(private masterDataService: MasterDataService) { }

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
