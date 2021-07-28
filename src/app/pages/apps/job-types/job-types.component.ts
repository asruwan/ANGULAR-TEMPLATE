import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MasterDataService} from '../../../core/services/api/master-data.service';
import {MasterDataPaidStatus} from '../../../core/models/MasterDataPaidStatus';
import {MasterDataPaidStatusDelete} from '../../../core/models/MasterDataPaidStatusDelete';
import {MasterDataJobType} from '../../../core/models/MasterDataJobType';
import {MasterDataJobTypeDelete} from '../../../core/models/MasterDataJobTypeDelete';

@Component({
    selector: 'app-job-types',
    templateUrl: './job-types.component.html',
    styleUrls: ['./job-types.component.scss']
})
export class JobTypesComponent implements OnInit {
    jobTypeList = [];
    status = '';
    isUpdate = 0;
    jobTypeGroup: FormGroup = this.fb.group({
        jobType: ['']
    });

    constructor(private fb: FormBuilder, private httpClient: HttpClient,
                private masterDataService: MasterDataService) {
    }

    ngOnInit() {
        this.loadJobType();
    }

    submit(): any {

        if (this.isUpdate > 0) {
            const body = {id: this.isUpdate, jobTypeName: this.jobTypeGroup.value.jobType};
            this.masterDataService.saveJobType(body).subscribe(
                (res: MasterDataJobType) => {
                    this.loadJobType();

                },
                (error) => {
                    alert('Errorrr');
                }
            );

        } else {
            const body = {id: 0, jobTypeName: this.jobTypeGroup.value.jobType};
            this.masterDataService.saveJobType(body).subscribe(
                (res: MasterDataJobType) => {
                    this.loadJobType();
                },
                (error) => {
                    alert('Errorrr');
                }
            );
        }
        this.isUpdate = 0;
        this.jobTypeGroup.reset();
    }

    loadJobType() {
        this.masterDataService.getAllJobType().subscribe((res: any[]) => {
            this.jobTypeList = res;
        });

    }

    deleteJobType(id) {

        const body = {id: id};
        this.masterDataService.deleteJobType(body).subscribe(
            (res: MasterDataJobTypeDelete) => {
                this.loadJobType();
            },
            error => {
                alert('Errorrr');
            }
        );
    }

    editJobType(id, status) {
        this.jobTypeGroup.setValue({jobType: status});
        this.isUpdate = id;
        this.status = status;

    }
}
