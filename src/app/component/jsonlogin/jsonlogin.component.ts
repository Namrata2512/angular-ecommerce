import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jsonlogin',
  templateUrl: './jsonlogin.component.html',
  styleUrls: ['./jsonlogin.component.css']
})
export class JsonloginComponent implements OnInit {
  public loginForm!:FormGroup;

  constructor(private formbuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupusers")
    .subscribe({ 
      next:(res)=>{
const user = res.find((a:any)=>{
  return a.email === this.loginForm.value.email &&  a.password ===this.loginForm.value.password
});

if(user){
  alert("login success");
  this.loginForm.reset();
  this.router.navigate(['products'])
}
else{
  alert("user not found");
}
      },

      error:()=>{
        alert("something went wrong");
      }

      })

  }
  // proceedlogin(){
  //   if(this.loginForm.valid){

  //   }
  // }

}
