import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';


import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
title = 'Categories';
ShowDetails =false;
IsCategoriesComponent=true;
 li:any;
    
   lis=[];
   catlist:string[]=[];
Detaillist:CategoryDetails = new CategoryDetails;
detLi :any; 
  constructor(private http : HttpClient){
}
GetCategory(value:string) :void{
 let url =`https://api.chucknorris.io/jokes/random?category=${value}`;

	this.myAsynFunction(url);

}
  myAsynFunction = async (url: string): Promise<CategoryDetails> => {
    await fetch(url).then( async (response)=> {
      if (response.ok) {
        this.Detaillist = await response.json()as unknown as CategoryDetails;
       if(this.Detaillist.created_at !=undefined){
   this.ShowDetails =true;}
      }
    })
   return  this.Detaillist;
  }
GetDetailvalues(value: string, http: HttpClient, detLi: any, Detaillist: CategoryDetails): CategoryDetails {
  http.get(`https://api.chucknorris.io/jokes/random?category=${value}`)
    .subscribe((Response: any) => {
 
      
      if(Response){ 
        hideloader();
       
      }
    
      detLi=Response;
      
      Detaillist=detLi;
    
   
    });
 return Detaillist;
}
LoadJokesCategories(http: HttpClient, li: any, lis: string[]):string [] {

      http.get('https://localhost:44366/chuck/categories')
    .subscribe((Response: any) => {
 
      
      if(Response){ 
        hideloader();
      }
    
      li=Response;
      
      lis=li;
      this.catlist =lis;
    });
   return this.catlist;
    
}
  ngOnInit(): void {
  
 
 this.catlist = this.LoadJokesCategories(this.http,this.li,this.lis);
  
  
  }

}

export class CategoryDetails{
created_at!: string;
  icon_url!: string;
  id!: string;
updated_at!: string;
value!: string;
}

function hideloader() {
var loading =  document.getElementById('loading');
if(loading!=null){
loading.style.display = 'none';
}
  
}








