import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MasterDataJobStatus} from '../../models/MasterDataJobStatus';
import {MasterDataJobStatusDelete} from '../../models/MasterDataJobStatusDelete';
import {MasterDataPaymentMethod} from '../../models/MasterDataPaymentMethod';
import {MasterDataPaymentMethodDelete} from '../../models/MasterDataPaymentMethodDelete';
import {MasterDataPaidStatusDelete} from '../../models/MasterDataPaidStatusDelete';
import {MasterDataPaidStatus} from '../../models/MasterDataPaidStatus';
import {MasterDataJobType} from '../../models/MasterDataJobType';
import {MasterDataJobTypeDelete} from '../../models/MasterDataJobTypeDelete';
import {MasterDataSubTypeDelete} from '../../models/MasterDataSubTypeDelete';
import {MasterDataSubType} from '../../models/MasterDataSubType';
import {MasterDataUser} from '../../models/MasterDataUser';
import {MasterDataUserDelete} from '../../models/MasterDataUserDelete';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  constructor(
      private httpClient: HttpClient
  ) { }

  getData(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/login');
  }
  saveJobStatus(body: MasterDataJobStatus): Observable<MasterDataJobStatus> {
    return this.httpClient.post<MasterDataJobStatus>('http://localhost:8080/master_data/save_job_status', body);
  }

  getAllJobStatus(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/master_data/get_job_status_list');
  }

  deleteJobStatus(body: MasterDataJobStatusDelete): Observable<MasterDataJobStatusDelete> {
    return this.httpClient.post<MasterDataJobStatusDelete>('http://localhost:8080/master_data/delete_job_status', body);
  }

  // deleteJobStatus(id: number): Observable<MasterDataJobStatusDelete> {
  //   alert("Master service" + id);
  //   return this.httpClient.delete<MasterDataJobStatusDelete>('http://localhost:8080/master_data/delete_job_status');
  // }
  editJobStatus(body: MasterDataJobStatusDelete): Observable<MasterDataJobStatusDelete> {
    return this.httpClient.put<MasterDataJobStatusDelete>('http://localhost:8080/master_data/update_job_status', body);
  }

  // deleteJobStatus(id: any): Observable<any> {
  //
  //   const boody = {jobStatusId: id};
  //   alert("HHHIiii " +id);
  //   return this.httpClient.post<number>('http://localhost:8080/master_data/delete_job_status', boody);
  // }
///////////////////////////////////////////PAYMENT METHOD/////////////////////////////////////////////
  savePaymentMethod(body: MasterDataPaymentMethod): Observable<MasterDataPaymentMethod> {
    return this.httpClient.post<MasterDataPaymentMethod>('http://localhost:8080/master_data/save_payment_method', body);
  }

  getAllPaymentMethod(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/master_data/get_payment_method_list');
  }

  deletePaymentMethod(body: MasterDataPaymentMethodDelete): Observable<MasterDataPaymentMethodDelete> {
    return this.httpClient.post<MasterDataPaymentMethodDelete>('http://localhost:8080/master_data/delete_payment_method', body);
  }

  // deleteJobStatus(id: number): Observable<MasterDataJobStatusDelete> {
  //   alert("Master service" + id);
  //   return this.httpClient.delete<MasterDataJobStatusDelete>('http://localhost:8080/master_data/delete_job_status');
  // }
  editPaymentMethod(body: MasterDataPaymentMethodDelete): Observable<MasterDataPaymentMethodDelete> {
    return this.httpClient.put<MasterDataPaymentMethodDelete>('http://localhost:8080/master_data/update_job_status', body);
  }
///////////////////////////////////////PAID STATUS///////////////////////////////////////////////
  savePaidStatus(body: MasterDataPaidStatus): Observable<MasterDataPaidStatus> {
    return this.httpClient.post<MasterDataPaidStatus>('http://localhost:8080/master_data/save_paid_status', body);
  }

  getAllPaidStatus(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/master_data/get_paid_status_list');
  }

  deletePaidStatus(body: MasterDataPaidStatusDelete): Observable<MasterDataPaidStatusDelete> {
    return this.httpClient.post<MasterDataPaidStatusDelete>('http://localhost:8080/master_data/delete_paid_status', body);
  }

  ///////////////////////////////////////JOB TYPE ////////////////////////////////////////////////
  saveJobType(body: MasterDataJobType): Observable<MasterDataJobType> {
    return this.httpClient.post<MasterDataJobType>('http://localhost:8080/master_data/save_job_type', body);
  }

  getAllJobType(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/master_data/get_job_type_list');
  }

  deleteJobType(body: MasterDataJobTypeDelete): Observable<MasterDataJobTypeDelete> {
    return this.httpClient.post<MasterDataJobTypeDelete>('http://localhost:8080/master_data/delete_job_type', body);
  }
  ///////////////////////////////////////SUB JOB TYPE ////////////////////////////////////////////////
  saveSubJobType(body: MasterDataSubType): Observable<MasterDataSubType> {
    return this.httpClient.post<MasterDataSubType>('http://localhost:8080/master_data/save_sub_job_Type', body);
  }

  getAllSubJobType(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/master_data/get_sub_Job_Type_list');
  }

  deleteSubJobType(body: MasterDataSubTypeDelete): Observable<MasterDataSubTypeDelete> {
    return this.httpClient.post<MasterDataSubTypeDelete>('http://localhost:8080/master_data/delete_sub_job_type', body);
  }
  //////////////////////////////////////////USER///////////////////////////////////////////////
  getAllUsers(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/master_data/get_user_list');
  }
  saveUser(body: MasterDataUser): Observable<MasterDataUser> {
    return this.httpClient.post<MasterDataUser>('http://localhost:8080/master_data/save_user', body);
  }
  deleteUser(body: MasterDataUserDelete): Observable<MasterDataUserDelete> {
    return this.httpClient.post<MasterDataUserDelete>('http://localhost:8080/master_data/delete_user', body);
  }
}

