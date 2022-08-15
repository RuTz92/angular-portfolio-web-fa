import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:Login2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
