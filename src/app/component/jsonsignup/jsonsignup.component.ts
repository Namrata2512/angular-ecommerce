import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-jsonsignup',
  templateUrl: './jsonsignup.component.html',
  styleUrls: ['./jsonsignup.component.css']
})
export class JsonsignupComponent implements OnInit {
  // public signupForm!:FormGroup;
  fullname:any;
  mobile:any;
  email:any;
  password:any;
  role:any;
  template:any;
usertype:string;
showMsg:any;
form:any;
value:any;

  
   signupForm = new FormGroup({
    fullname:new FormControl('',Validators.required),
    mobile:new FormControl('',[Validators.required, Validators.maxLength(10),Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required),
    role:new FormControl('',Validators.required),
   })


  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router, private apiservice:ApiService) { }

  ngOnInit(): void {
  }
  signup(){
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
  getdata(){
    // alert("data has been submitted successfully");

    var name =this.signupForm.get('fullname')?.value;
    var mobile =this.signupForm.get('mobile')?.value;
    var email =this.signupForm.get('email')?.value;
    var password =this.signupForm.get('password')?.value;
    var role =this.signupForm.get('role')?.value;
    console.log(name,mobile,email,role,password);
}
// signup(){
//   if (this. signupForm.valid) {
//     const fd: FormData = new FormData();
//     fd.append('fullname',this.fullname);
//     fd.append('mobile', this.mobile);
//     fd.append('email', this.email);
//     fd.append('password', this.password);
//     fd.append('role', this.role);

//     console.log(this.fullname),
// console.log(this.mobile),
// console.log(this.email);
// console.log(this.password);
// console.log(this.role);

// this.apiservice.jsonsignup(fd)
//        .subscribe(

//         (data:any)=>{
//           if (data.userexists === "true") 
//           {
//                       this.showMsg= true;
            
//          }
//          else{
//           alert(' Something went wrong');


// }

// });
//   }
// }
    
    
  
  
  }
    


