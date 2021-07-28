import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import {SubTypesComponent} from './sub-types/sub-types.component';
import {AppointmentStatusComponent} from './appointment-status/appointment-status.component';
import {JobQueueStatusComponent} from './job-queue-status/job-queue-status.component';
import {JobStatusComponent} from './job-status/job-status.component';
import {JobTypesComponent} from './job-types/job-types.component';
import {PaidStatusComponent} from './paid-status/paid-status.component';
import {PaymentMethodComponent} from './payment-method/payment-method.component';
import {UserComponent} from './user/user.component';
import {ServiceProviderComponent} from './service-provider/service-provider.component';
import {AppointmentsComponent} from '../apps/appointments/appointments.component';

const routes: Routes = [
    {
        path: 'apps-calendar',
        component: CalendarComponent
    },{
        path:'sub-types',
        component:SubTypesComponent
    },{
        path:'appointment-status',
        component:AppointmentStatusComponent
    },{
        path:'job-queue-status',
        component:JobQueueStatusComponent
    },{
        path:'job-status',
        component:JobStatusComponent
    },{
        path:'job-types',
        component:JobTypesComponent
    },{
        path:'paid-status',
        component:PaidStatusComponent
    },{
        path:'payment-method',
        component:PaymentMethodComponent
    },{
        path:'service-provider',
        component:ServiceProviderComponent
    },{
        path:'appointments',
        component:AppointmentsComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
