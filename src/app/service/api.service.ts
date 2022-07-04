import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import{BehaviorSubject, Observable} from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Users} from 'src/app/users';

interface LoginResponse {
  access_token: string;
  data: any;
  name: string;
  status: string;
  message: string;

}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url:string='http://localhost/project/';
  signupForm: any;
  private msgservice=new BehaviorSubject<string>('n');
  currentmsg=this.msgservice.asObservable();
  n1=localStorage.getItem("Name")
  
  public title = new BehaviorSubject('Title');
  httpOptions: { headers: HttpHeaders; };
  

  constructor(private http:HttpClient, private router:Router) { 
   this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        "Access-Control-Allow-Origin": "*",
        
      } )
    };
  }

  


  
  public create(form: any): Observable<any>{
    return this.http.post(this.url+'registration.php', form)
    .pipe(map((res: any) => res.json()));
   
  }

  public login(form: any){
  
    return this.http.post(this.url+'login.php', form);
   
     
    }

 logout() {
  localStorage.clear();
  window.localStorage.clear(); //clear all localstorage
  window.localStorage.removeItem("Email"); //remove one item
  window.localStorage.removeItem("cart"); //remove one item
 
  
  // alert('logged out');
  this.router.navigate(['login']);
}

 
getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products").pipe(map((res:any)=>{
      return res;
    }))
 }

  
  // using json
  public jsonsignup(form: any){
    this.http.post<any>("http://localhost:3000/signupusers",this.signupForm.value)
    .subscribe({ 
      next:(res)=>{
        alert("signup success");
        this.signupForm.reset();
        this.router.navigate(['jsonlogin']);
      },
    error:()=>{
    alert("something went wrong");}
    })
  }

  public jsonlogin(form: any){
    return this.http.post(this.url+'login.php', form);
      }
      setTitle(title: string) {
        this.title.next(title);
      }

      // setTitlecart(title: string) {
      //   this.title.next(title);
      // }
      getname(){
       console.log(localStorage.getItem("Name")) ;
      }
    getusers(){
     let a= "http://localhost/project/display.php";
     return this.http.get(a);
      // return this.http.get<Users[]>("http://localhost/project/display.php",this.httpOptions);
      // return null;
    }

    }

