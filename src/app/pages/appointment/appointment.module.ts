import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppointmentComponent } from './appointment/appointment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import {UIModule} from '../../shared/ui/ui.module';

import { AppointmentRoutingModule } from './appointment-routing.module';


@NgModule({
  declarations: [ AppointmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    AppointmentRoutingModule,
    UIModule,
  ]
})
export class AppointmentModule { }
