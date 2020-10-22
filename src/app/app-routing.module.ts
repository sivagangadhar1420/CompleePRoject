import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LocationComponent } from './location/location.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'location',component:LocationComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
