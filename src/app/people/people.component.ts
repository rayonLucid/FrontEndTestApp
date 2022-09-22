import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.sass']
})
export class PeopleComponent implements OnInit {
title="People";
PeopleList:People =new People();
ListofPeople :IPeople[]=[];
searchTable:string="";
url =`https://localhost:44366/swapi/people`;
  constructor(
 
  ) { }

  myAsynFunction = async (url: string): Promise<IPeople[]> => {
    await fetch(url).then( async (response)=> {
      if (response.ok) {
        this.ListofPeople= await response.json() ;
var jsonResult =JSON.parse(this.ListofPeople.toString())
       this.ListofPeople = jsonResult.results ;
         hideloader();
      console.log(jsonResult)
      }
    })
   return  this.ListofPeople;
  }
  FilterTable() {
 let filteedTableValues =this.ListofPeople.filter(peopleparam =>peopleparam.name ==this.searchTable || peopleparam.birth_year ==this.searchTable);
 this.ListofPeople =[]
 this.ListofPeople =filteedTableValues;
 if(this.searchTable.length ==0){


	this.myAsynFunction(this.url);
 
 }
  }
  ngOnInit(): void {
  

	this.myAsynFunction(this.url);
  }

}

export class People {
name!:string;
height!:string;
mass!:string;
hair_color!:string;
skin_color!:string;
eye_color!:string;
birth_year!:string;
gender!:string;
homeworld!:string;
films!:string[];
species!:string;
vehicles!:string[];
starships!:string[];
created!:string;
edited!:string;
url!:string;

}
export interface IPeople {
name:string,
height:string,
mass:string,
hair_color:string,
skin_color:string,
eye_color:string,
birth_year:string,
gender:string,
homeworld:string,
films:string[],
species:string,
vehicles:string[],
starships:string[],
created:string,
edited:string,
url:string

}
function hideloader() {
var loading =  document.getElementById('loading');
if(loading!=null){
loading.style.display = 'none';
}
  
}
