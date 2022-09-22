import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.sass']
})
export class CategoriesDetailComponent implements OnInit ,OnChanges{
title ="Category Detail";
updated_at :string|null  ="";
imageurl:string ="";
icon_url:string ="";
value:string  ="";
created_at:string|null ="";
@Input() Detaillist : CategoryDetails =new CategoryDetails;
  constructor() { 
  
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.created_at =new Date(this.Detaillist.created_at).toLocaleDateString();
const datepipe: DatePipe = new DatePipe('en-US')
let formattedDate = datepipe.transform(this.Detaillist.updated_at, 'dd-MMM-YYYY')
this.updated_at=formattedDate;
  } 
 
  ngOnInit(): void {

  }

}
export class CategoryDetails{
  created_at!: string;
  icon_url!: string;
  id!: string;
updated_at!: string;
value!: string;
}