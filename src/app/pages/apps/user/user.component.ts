import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MasterDataService} from '../../../core/services/api/master-data.service';
import {MasterDataSubType} from '../../../core/models/MasterDataSubType';
import {MasterDataUser} from '../../../core/models/MasterDataUser';
import {boolean} from 'smooth-scrollbar/decorators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList = [];
  status = '';
  isUpdate = 0;
  userGroup: FormGroup = this.fb.group({
    username: [''],
    password: [''],
    active: true,
    dateOfBirth: []
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient,
              private masterDataService: MasterDataService) { }

  ngOnInit() {
    this.loadAllUsers();
  }
  submit(): any {

    if (this.isUpdate > 0) {
      const body = {id: this.isUpdate,
        username: this.userGroup.value.username,
        password: this.userGroup.value.password,
        active: this.userGroup.value.active,
        dateOfBirth: this.userGroup.value.dateOfBirth,
        gender: this.userGroup.value.gender,
        name: this.userGroup.value.name,
        phoneNumber: this.userGroup.value.phoneNumber,
        placeOfBirth: this.userGroup.value.placeOfBirth,
        role: this.userGroup.value.role
      };
      this.masterDataService.saveUser(body).subscribe(
          (res: MasterDataUser) => {
            this.loadAllUsers();

          },
          (error) => {
            alert('Errorrr');
          }
      );

    } else {
      const body = {id: 0, username: this.userGroup.value.username,
        password: this.userGroup.value.password,
        active: this.userGroup.value.active,
        dateOfBirth: this.userGroup.value.dateOfBirth,
        gender: this.userGroup.value.gender,
        name: this.userGroup.value.name,
        phoneNumber: this.userGroup.value.phoneNumber,
        placeOfBirth: this.userGroup.value.placeOfBirth,
        role: this.userGroup.value.role
      };
      this.masterDataService.saveUser(body).subscribe(
          (res: MasterDataUser) => {
            this.loadAllUsers();
          },
          (error) => {
            alert('Errorrr');
          }
      );
    }
    this.isUpdate = 0;
    this.userGroup.reset();
  }

  loadAllUsers() {
    this.masterDataService.getAllUsers().subscribe((res: any[]) => {
      this.userList = res;
    });

  }
}
