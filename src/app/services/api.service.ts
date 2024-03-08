import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public urlBase = '';
  constructor(public http : HttpClient) {
    this.urlBase = environment.DOMAIN;
  }

  getPromise(rute : string): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.http.get(this.urlBase + rute).subscribe({
        next:(resp)=>{
          resolve(resp)
        },error:(err)=>{
          reject(err)
        }
      })
    });
  }
  getObservable(rute: string):Observable<any>{
      return  this.http.get(this.urlBase + rute);
  }

  // TODO 2 metodos Post , Put , Delete


}
