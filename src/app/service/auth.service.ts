import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl="";

  constructor(private http:HttpClient, ) { }
// proceedlogin(usercred:any){
//   return this.http.post()
// }
IsLoggedIn(){
  return !!(localStorage.getItem("Email"));
}

}
