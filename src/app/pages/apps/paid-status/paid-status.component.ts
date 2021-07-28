import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MasterDataService} from '../../../core/services/api/master-data.service';
import {MasterDataPaymentMethod} from '../../../core/models/MasterDataPaymentMethod';
import {MasterDataJobStatusDelete} from '../../../core/models/MasterDataJobStatusDelete';
import {MasterDataPaidStatus} from '../../../core/models/MasterDataPaidStatus';
import {MasterDataPaidStatusDelete} from '../../../core/models/MasterDataPaidStatusDelete';

@Component({
  selector: 'app-paid-status',
  templateUrl: './paid-status.component.html',
  styleUrls: ['./paid-status.component.scss']
})
export class PaidStatusComponent implements OnInit {
  paidStatusList = [];
  status = '';
  isUpdate = 0;
  paidStatusGroup: FormGroup = this.fb.group({
    paidStatus: ['']
  });
  constructor(private fb: FormBuilder, private httpClient: HttpClient ,
              private masterDataService: MasterDataService) { }

  ngOnInit() {
    this.loadPaidStatus();
  }
  submit(): any {

    if (this.isUpdate > 0) {
      const body = {id: this.isUpdate, paidStatus: this.paidStatusGroup.value.paidStatus};
      this.masterDataService.savePaidStatus(body).subscribe(
          (res: MasterDataPaidStatus) => {
            this.loadPaidStatus();

          },
          (error) => {
            alert('Errorrr');
          }
      );

    } else {
      const body = {id: 0, paidStatus: this.paidStatusGroup.value.paidStatus};
      this.masterDataService.savePaidStatus(body).subscribe(
          (res: MasterDataPaidStatus) => {
            this.loadPaidStatus();
          },
          (error) => {
            alert('Errorrr');
          }
      );
    }
    this.isUpdate = 0;
    this.paidStatusGroup.reset();
  }
  loadPaidStatus() {
    this.masterDataService.getAllPaidStatus().subscribe((res: any[]) => {
      this.paidStatusList = res;
    });

  }
  deletePaidStatus(id) {

    const body =  { id : id};
    this.masterDataService.deletePaidStatus(body).subscribe(
        (res: MasterDataPaidStatusDelete) => {
          this.loadPaidStatus();
        },
        error => {
          alert('Errorrr');
        }
    );
  }

  editPaidStatus(id, status) {
    this.paidStatusGroup.setValue({paidStatus: status});
    this.isUpdate = id;
    this.status = status;

  }
}
