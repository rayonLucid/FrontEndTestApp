import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { JokeSearchComponent } from './people/joke-search/joke-search.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
{ path: '', component: AppComponent,pathMatch:"full" },
{ path: 'categories', component: CategoriesComponent,pathMatch:"full" },
{ path: 'people', component: PeopleComponent,pathMatch:"full" },
{ path: 'categorydetail', component: CategoriesDetailComponent,pathMatch:"full" },
{ path: 'peoplejokesearch', component: JokeSearchComponent,pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
