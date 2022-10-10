import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  proyecto: string;
  descripcion: string;
  fecha: string;
  img: string;

  constructor(private proyectoService: ProyectoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.proyecto, this.descripcion, this.fecha, this.img);
    this.proyectoService.save(proyecto).subscribe(data => {
      alert("Proyecto Creado correctamente!");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo al añadir Proyecto");
      this.router.navigate(['']);
    })
  }

}
