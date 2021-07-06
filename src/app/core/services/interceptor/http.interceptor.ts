import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { AuthenticationService } from '../auth.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //set token
    const currentUser = this.authenticationService.currentUser();
    console.log("here");
    if (currentUser && !!currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`,
        }
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) return event;
      }),
      catchError(
        (err: HttpErrorResponse) => {
          return throwError(err);
        }),
      finalize(() => {

      }));
  }
}
