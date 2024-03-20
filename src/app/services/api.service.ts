import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public urlBase = '';
  public urlBaseMock = '';
  constructor(public http : HttpClient) {
    this.urlBase = environment.DOMAIN;
    this.urlBaseMock = environment.DOMAIN_MOCKAPI;
  }

  getPro(rute : string): Promise<any>{
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
  getObs(rute: string , domine = true):Observable<any>{
       const  url = domine  ? this.urlBase + rute : this.urlBaseMock + rute
      return  this.http.get(url);
  }
  postPro(rute : string , params:any): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.http.post(this.urlBase + rute , params).subscribe({
        next:(resp)=>{
          resolve(resp)
        },error:(err)=>{
          reject(err)
        }
      })
    });
  }
  postObs(rute: string , paramas: any):Observable<any>{
    return  this.http.post(this.urlBase + rute , paramas);
  }
  putPro(rute : string , params:any): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.http.put(this.urlBase + rute , params).subscribe({
        next:(resp)=>{
          resolve(resp)
        },error:(err)=>{
          reject(err)
        }
      })
    });
  }
  putObs(rute: string , paramas: any):Observable<any>{
    return  this.http.put(this.urlBase + rute , paramas);
  }
  deletePro(rute : string ): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.http.delete(this.urlBase + rute ).subscribe({
        next:(resp)=>{
          resolve(resp)
        },error:(err)=>{
          reject(err)
        }
      })
    });
  }
  deleteObs(rute: string):Observable<any>{
    return  this.http.delete(this.urlBase + rute );
  }
}
