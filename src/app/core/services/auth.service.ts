import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { CookieService } from '../services/cookie.service';
import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    user: User;

    constructor(private http: HttpClient, private cookieService: CookieService) {
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
        }
        return this.user;
    }

    /**
     * Performs the auth  http://localhost:8080/login
     * @param email email of user /api/login
     * @param password password of user /api/login
     */
    // login2(email: string, password: string) {
    //     alert(email + password);
    //     return this.http.get<any>(`/hello`);
    //
    // }
    login(username: string, password: string) {
       // alert(username + password);
        return this.http.post<any>(`http://localhost:8080/authenticate`, { username, password })
            .pipe(map(token => {
                // login successful if there's a jwt token in the response
                if (token && !!token.jwt) {
//                    this.user = user;
                    // store user details and jwt in cookie
                    this.cookieService.setCookie('currentUser', JSON.stringify(token), null);
                }
                return token;
            }));
    }




    // login3(email: string, password: string) {
    //     let httpOptions ={
    //         headers:new HttpHeaders({
    //             "Authorization":"Bearer token"
    //         })
    //     };
    //     alert(email + password);
    //     let httpHeader: HttpHeaders = new HttpHeaders();
    //     httpHeader.set("Authorization", `Bearer token`);
    //     return this.http.post<any>(`http://localhost:8080/authenticate`, { email, password },httpOptions)
    //         .pipe(map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 this.user = user;
    //                 // store user details and jwt in cookie
    //                 this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
    //             }
    //             return user;
    //         }));
    // }






    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        this.cookieService.deleteCookie('currentUser');
        this.user = null;
    }
}

