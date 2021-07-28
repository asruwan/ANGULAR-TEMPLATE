import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MasterDataService} from '../../../core/services/api/master-data.service';
import {MasterDataJobStatus} from '../../../core/models/MasterDataJobStatus';
import {MasterDataJobStatusDelete} from '../../../core/models/MasterDataJobStatusDelete';
import {MasterDataPaymentMethod} from '../../../core/models/MasterDataPaymentMethod';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

  paymentMethodList = [];
  method = '';
  isUpdate = 0;
  paymentTypeGroup: FormGroup = this.fb.group({
    paymentMethod: ['']
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient ,
              private masterDataService: MasterDataService) { }

  ngOnInit() {
    this.loadPaymentMethod();
  }

  submit(): any {

    if (this.isUpdate > 0) {
      const body = {id: this.isUpdate, methodName: this.paymentTypeGroup.value.paymentMethod};
      this.masterDataService.savePaymentMethod(body).subscribe(
          (res: MasterDataPaymentMethod) => {
            this.loadPaymentMethod();

            //this.jobStatusGroup.value.jobStatus = '';

          },
          (error) => {
            alert('Errorrr');
          }
      );
      //this.isUpdate = 0;
    } else {
      const body = {id: 0, methodName: this.paymentTypeGroup.value.paymentMethod};
      this.masterDataService.savePaymentMethod(body).subscribe(
          (res: MasterDataPaymentMethod) => {
            this.loadPaymentMethod();
          },
          (error) => {
            alert('Errorrr');
          }
      );
    }
    this.isUpdate = 0;
    this.paymentTypeGroup.reset();
  }
  loadPaymentMethod() {
    this.masterDataService.getAllPaymentMethod().subscribe((res: any[]) => {
      this.paymentMethodList = res;
    });

  }
  deletePaymentMethod(id) {

    const body =  { id : id};
    this.masterDataService.deletePaymentMethod(body).subscribe(
        (res: MasterDataJobStatusDelete) => {
          this.loadPaymentMethod();
        },
        error => {
          alert('Errorrr');
        }
    );
  }
  // deleteJobStatus(id) {
  //     this.masterDataService.deleteJobStatus(id).subscribe(
  //         (res: MasterDataJobStatusDelete) => {
  //             this.loadJobStatus();
  //         },
  //         error => {
  //             alert('Errorrr');
  //         }
  //     );
  // }
  editPaymentMethod(id, status) {
    this.paymentTypeGroup.setValue({paymentMethod: status});
    this.isUpdate = id;
    this.method = status;



    // const body =  { id : id, statusName: this.jobStatusGroup.value.jobStatus };
    // this.masterDataService.editJobStatus(body).subscribe(
    //     (res: MasterDataJobStatusDelete) => {
    //         this.loadJobStatus();
    //     },
    //     error => {
    //         alert('Error in update status name');
    //     }
    // );
  }
}




