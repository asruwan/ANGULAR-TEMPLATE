import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sub-types',
  templateUrl: './sub-types.component.html',
  styleUrls: ['./sub-types.component.scss']
})
export class SubTypesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  // loadSubTypes(){
  //   let url = "http://localhost:8080/login";
  //   alert("Hiiiiiiii1111");
  //   this.http.post(url, {
  //     // text:this.title
  //   }).toPromise().then((data : any) => {
  //     //this.title = JSON.stringify(data.User);
  //     //this.title = data;
  //     console.log(data);
  //   });
  // }
}
