import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './about/edit-about.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './experiencia/new-experiencia.component';
import { HomeComponent } from './home/home.component';
import { Login2Component } from './login2/login2.component';
import { EditProyectoComponent } from './proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './proyectos/new-proyecto.component';
import { EditSkillComponent } from './skills/edit-skill.component';
import { NewSkillComponent } from './skills/new-skill.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:Login2Component},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},  
  {path:'editedu/:id', component: EditeducacionComponent},
  {path:'newskill', component: NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent},
  {path:'newproyecto', component: NewProyectoComponent},
  {path:'editproyecto/:id', component: EditProyectoComponent},
  {path:'editabout/:id', component: EditAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
