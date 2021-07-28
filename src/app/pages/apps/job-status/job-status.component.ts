import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MasterDataService} from '../../../core/services/api/master-data.service';
import {MasterDataJobStatus} from '../../../core/models/MasterDataJobStatus';
import {MasterDataJobStatusDelete} from '../../../core/models/MasterDataJobStatusDelete';

@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.scss']
})
export class JobStatusComponent implements OnInit {
  jobStatusList = [];
  status = '';
  isUpdate = 0;
  jobStatusGroup: FormGroup = this.fb.group({
    jobStatus: ['']
  });
  constructor(private fb: FormBuilder, private httpClient: HttpClient ,
              private masterDataService: MasterDataService ) {}

  ngOnInit() {
    this.loadJobStatus();
  }

    submit(): any {
        //alert('IS Update ' + this.isUpdate );
        if (this.isUpdate > 0) {
            const body = {id: this.isUpdate, statusName: this.jobStatusGroup.value.jobStatus};
            this.masterDataService.saveJobStatus(body).subscribe(
                (res: MasterDataJobStatus) => {
                    this.loadJobStatus();
                    //this.jobStatusGroup.value.jobStatus = '';

                },
                (error) => {
                    alert('Errorrr');
                }
            );

        } else {
            const body = {id: 0, statusName: this.jobStatusGroup.value.jobStatus};
            this.masterDataService.saveJobStatus(body).subscribe(
                (res: MasterDataJobStatus) => {
                    this.loadJobStatus();
                    // this.jobStatusGroup.value.jobStatus = '';
                    //alert('mmm ' + body.id);
                },
                (error) => {
                    alert('Errorrr');
                }
            );
        }
        //alert("status  " +status);
        this.isUpdate = 0;
        //this. status = '';
        this.jobStatusGroup.reset();
        //alert("status  " +status);// setValue
    }
  loadJobStatus() {
      this.masterDataService.getAllJobStatus().subscribe((res: any[]) => {
      this.jobStatusList = res;
    });
  }
    deleteJobStatus(id) {
      //alert(id);
        const body =  { id : id};
        this.masterDataService.deleteJobStatus(body).subscribe(
            (res: MasterDataJobStatusDelete) => {
                this.loadJobStatus();
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
    editJobStatus(id, status) {
        this.jobStatusGroup.setValue({jobStatus: status});
        this.isUpdate = id;
        this.status = status;
        //this.jobStatus.setValue({jobStatus: status});

        //alert(id +" "+ status);


        // this.myFormGroup.setValue({
        //     formControlName1: myValue1,
        //     formControlName2: myValue2
        // });



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

