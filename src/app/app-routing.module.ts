import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:Login2Component},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
