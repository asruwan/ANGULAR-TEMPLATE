import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppointmentComponent } from './appointment/appointment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import {AppsRoutingModule} from '../apps/apps-routing.module';
import {UIModule} from '../../shared/ui/ui.module';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ AppointmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    AppsRoutingModule,
    UIModule,
    HttpClientModule
  ]
})
export class AppointmentModule { }
