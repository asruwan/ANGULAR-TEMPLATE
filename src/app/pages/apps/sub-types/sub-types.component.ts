import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MasterDataService} from '../../../core/services/api/master-data.service';
import {MasterDataPaidStatus} from '../../../core/models/MasterDataPaidStatus';
import {MasterDataPaidStatusDelete} from '../../../core/models/MasterDataPaidStatusDelete';
import {MasterDataSubType} from '../../../core/models/MasterDataSubType';
import {MasterDataSubTypeDelete} from '../../../core/models/MasterDataSubTypeDelete';

@Component({
    selector: 'app-sub-types',
    templateUrl: './sub-types.component.html',
    styleUrls: ['./sub-types.component.scss']
})
export class SubTypesComponent implements OnInit {
    subTypeList = [];
    status = '';
    isUpdate = 0;
    subTypeGroup: FormGroup = this.fb.group({
        subTypeName: ['']
    });

    constructor(private fb: FormBuilder, private httpClient: HttpClient,
                private masterDataService: MasterDataService) {
    }

     ngOnInit() {
         this.loadSubJobType();
     }

    submit(): any {

        if (this.isUpdate > 0) {
            const body = {id: this.isUpdate, subTypeName: this.subTypeGroup.value.subTypeName};
            this.masterDataService.saveSubJobType(body).subscribe(
                (res: MasterDataSubType) => {
                    this.loadSubJobType();

                },
                (error) => {
                    alert('Errorrr');
                }
            );

        } else {
            const body = {id: 0, subTypeName: this.subTypeGroup.value.subTypeName};
            this.masterDataService.saveSubJobType(body).subscribe(
                (res: MasterDataSubType) => {
                    this.loadSubJobType();
                },
                (error) => {
                    alert('Errorrr');
                }
            );
        }
        this.isUpdate = 0;
        this.subTypeGroup.reset();
    }

    loadSubJobType() {
        this.masterDataService.getAllSubJobType().subscribe((res: any[]) => {
            this.subTypeList = res;
        });

    }

    deleteSubJobType(id) {

        const body = {id: id};
        this.masterDataService.deleteSubJobType(body).subscribe(
            (res: MasterDataSubTypeDelete) => {
                this.loadSubJobType();
            },
            error => {
                alert('Errorrr');
            }
        );
    }

    editSubJobType(id, status) {
        this.subTypeGroup.setValue({subTypeName: status});
        this.isUpdate = id;
        this.status = status;

    }
}
