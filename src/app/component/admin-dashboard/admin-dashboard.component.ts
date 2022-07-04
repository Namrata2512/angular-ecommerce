import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Users } from 'src/app/users';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  email_from_local=localStorage.getItem("Email");
  role_from_local=localStorage.getItem("role");
  name_from_local=localStorage.getItem("Name");
  n:any;
  user1:any;
data:any;
allusers:any=[];
user:any;



  constructor(private apiservice:ApiService) {
this.apiservice.getusers().subscribe(
  data1=>{
    console.log(data1);
  }
)
   }

  ngOnInit(): void {
   this.n=this.apiservice.getname();
   //to display all users 
   this.user1=this.apiservice.getusers().subscribe( (data1)=>{
this.user1=data1;
console.log(data1);
this.allusers=data1;
  });

  }
  getn(){
    alert(this.n);
  }

}



