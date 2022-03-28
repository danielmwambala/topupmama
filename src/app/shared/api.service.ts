import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  // user login
  userLogin(data : any) {
    return this.http.post<any>("https://reqres.in/api/login", data).pipe(map((res:any)=>{
      return res;
    }))
  }
  // register a user
  postUser(data : any) {
    return this.http.post<any>("https://reqres.in/api/register", data).pipe(map((res:any)=>{
      return res;
    }))
  }
  // get all users
  getUsers() {
    return this.http.get<any>("https://reqres.in/api/users/").pipe(map((res:any)=>{
      return res;
    }))
  }
  // get a user
  getUser(id : number) {
    return this.http.get<any>("https://reqres.in/api/users/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
  // get a user
  updateUser(data: any, id : number) {
    return this.http.put<any>("https://reqres.in/api/users/"+id, data).pipe(map((res:any)=>{
      return res;
    }))
  }
  // delete a user
  deteteUser(id : number) {
    return this.http.delete<any>("https://reqres.in/api/users/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
