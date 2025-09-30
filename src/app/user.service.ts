import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
api ="http://localhost:3000/users"
  constructor(private httpclient:HttpClient) { }
  

addData(data:any){
  return this.httpclient.post(this.api,data)
}

getAllUserDetail(){
return this.httpclient.get(this.api,{responseType:'json'})
}

getEditUserDetail(id:any){
  return this.httpclient.get(`${this.api}/${id}`)
}

updateUserDetail(data:any){
  return this.httpclient.put(`${this.api}/${data.id}`,data)
}
deleteUserDetail(id:any){
  return this.httpclient.delete(`${this.api}/${id}`)
}




}
