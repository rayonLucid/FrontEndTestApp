import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { PeopleComponent } from './people/people.component';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';
import { FormsModule } from '@angular/forms';
import { JokeSearchComponent } from './people/joke-search/joke-search.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    PeopleComponent,
    CategoriesDetailComponent,
    JokeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
