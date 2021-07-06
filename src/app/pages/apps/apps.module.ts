import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';
import { AppsRoutingModule } from './apps-routing.module';

import { EmailModule } from './email/email.module';
import { ProjectModule } from './project/project.module';
import { TasksModule } from './tasks/tasks.module';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarComponent } from './calendar/calendar.component';
import { SubTypesComponent } from './sub-types/sub-types.component';
import { AppointmentStatusComponent } from './appointment-status/appointment-status.component';
import { JobQueueStatusComponent } from './job-queue-status/job-queue-status.component';
import { JobStatusComponent } from './job-status/job-status.component';
import { JobTypesComponent } from './job-types/job-types.component';
import { PaidStatusComponent } from './paid-status/paid-status.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [CalendarComponent, SubTypesComponent, AppointmentStatusComponent, JobQueueStatusComponent, JobStatusComponent, JobTypesComponent, PaidStatusComponent, PaymentMethodComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModalModule,
        FullCalendarModule,
        AppsRoutingModule,
        UIModule,
        EmailModule,
        ProjectModule,
        TasksModule,
        HttpClientModule
    ]
})

export class AppsModule { }
