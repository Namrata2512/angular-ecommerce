import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';
import { concat } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem :any;
  public SearchTerm: string='';
  Date1: Date = new Date();
  localDate: string= new Date().toLocaleString();
  @Input() name:string;
  msgfromservice: string;
  logindata:any;
  res:any;
  totalitem1:any | null;
  cartvalue:any;
  title:any;



  constructor(private cartservice:CartService,  private apiservice:ApiService, private router:Router) {
    let login=localStorage.setItem('cart', JSON.stringify(this.totalItem));
    this.apiservice.setTitle('');
   
   }

  email_from_local=localStorage.getItem("Email");
  name_from_local=localStorage.getItem("Name");
  cartvalue_from_local=JSON.parse(localStorage.getItem("cart") || '{}');


  ngOnInit(): void {
    this.apiservice.currentmsg.subscribe(
      (data:string)=>{
        this.msgfromservice=data;
      }
    )
   
    this.cartservice.getProducts().subscribe(res=>{
this.totalItem=res.length;
// console.log("cartnumber is:",this.totalItem);

localStorage.setItem('cart', JSON.stringify(this.totalItem));
console.log('c is',localStorage[this.totalItem]);
this.totalitem1=localStorage[this.totalItem];
this.cartvalue_from_local= JSON.parse(localStorage.getItem("cart") || '{}');
console.log('cart value is ', this.cartvalue_from_local);

    })
   
  }
 
  search(event:any){
    this.SearchTerm=(event.target as HTMLInputElement).value;
    console.log(this.SearchTerm);
    this.cartservice.search.next(this.SearchTerm);
  }
  logout() {  
    console.log('logout');  
    this.apiservice.logout();  
    this.router.navigate(['/login']);  
    // window.localStorage.removeItem("cart");
    this.cartvalue_from_local=0;
  } 



}


