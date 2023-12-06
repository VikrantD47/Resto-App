import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
url = "http://localhost:3000/restaurants";
rooturl = "http://localhost:3000/";
userurl = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }
  
  getList():any{
    return this.http.get(this.url);
  }

  saveResto(data:any){
    return this.http.post(this.url, data);
  }

  deleteResto(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }

  gettResto(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  putResto(id:any, data:any){
    return this.http.put(`${this.url}/${id}`, data);
  }

  register(data:any){
    return this.http.post(this.rooturl+"users", data);
  }

  getRegisteredUsers():Observable<any[]>{
    return this.http.get<any[]>(this.userurl);
  }
}
