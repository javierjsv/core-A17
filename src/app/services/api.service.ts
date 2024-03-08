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
  getObs(rute: string):Observable<any>{
      return  this.http.get(this.urlBase + rute);
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
