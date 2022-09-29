import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-search',
  templateUrl: './joke-search.component.html',
  styleUrls: ['./joke-search.component.css']
})
export class JokeSearchComponent implements OnInit {
title="Search People Or Jokes";
SearchType:string="";
searchTable:string="";
PeopleList:People =new People();
ListofPeople :IPeople[]=[];
JokeCatDetailList:ICategoryDetails[] =[]
JokeCatTable =false;
PeopleTable =false;
hideloader=false;
PersoN_name:string =""
height:string="";
 mass:string ="";
  hair_color:string ="";
    skin_color:string ="";
      eye_color:string ="";
      FilmList =[]
url =`https://localhost:44366/Search?query=${this.searchTable}`;
  constructor() { }

searchfunction(){
this.url =`https://localhost:44366/Search?query=${this.searchTable}`;
this.hideloader =true;
this.SearchFunction(this.url);

}
 SearchFunction = async (url: string): Promise<any[]> => {
    await fetch(url).then( async (response)=> {
      if (response.ok) {
       var responseresult = await response.json() ;
     //  "apiType":""
var jsonResult =JSON.parse(JSON.stringify(responseresult))
if (jsonResult.apiType == "api.chucknorris.io"){
this.SearchType ="Joke Category Search";
this.PeopleTable =false;
this.JokeCatTable =true;
var jokecat =JSON.parse(jsonResult.apiResult)
this.ListofPeople=[];
jokecat.result.map((data:ICategoryDetails)=>{
this.JokeCatDetailList.push(data)
})

}else{

this.PeopleTable =true;
this.JokeCatTable =false;
this.JokeCatDetailList =[];
this.SearchType ="People Search";
var peeps =JSON.parse(jsonResult.apiResult)
this.PersoN_name =peeps.name;
this.height =peeps.height;
this.mass =peeps.mass;
this.hair_color =peeps.hair_color;
this.skin_color =peeps.skin_color;
this.eye_color =peeps.eye_color;
this.FilmList =peeps.films
 this.ListofPeople = peeps ;
}

      
         this.hideloader =false;
      console.log(jsonResult)
      }else{
      alert("Please Check your internet connection")
      }
    })
   return  this.ListofPeople;
  }


  ngOnInit(): void {
  }

}
export interface ICategoryDetails{
categories:string[],
created_at: string,
  icon_url: string,
  id: string,
updated_at: string,
value: string
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

