import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Menu2Component } from './menu2/menu2.component';

const routes: Routes = [{path:'Inicio' ,component: AppComponent},
                        {path:'Catag' ,component: Menu2Component}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
