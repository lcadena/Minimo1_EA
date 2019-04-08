import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignaturas } from "../models/asignaturas";
import { Environments } from "./environments"
import { Observable } from "rxjs";
import {Alumnos} from "../models/alumnos";

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  environment: Environments;
  selectedAlumno: Asignaturas; 

  constructor( private http: HttpClient) { 
    this.selectedAlumno = new Asignaturas("","","");
    this.environment = new Environments();
  }

  addAsignatura(asignatura: Asignaturas) {
    return this.http.post(this.environment.urlAsignatura + "/nueva" , asignatura)
  }

  getAsignaturas() :Observable<Asignaturas[]> {
    return this.http.get<Asignaturas[]>(this.environment.urlAsignatura + "/listaAsignaturas");
  }

  //Me borra el alumno
  deleteAsignatura(_id: string) {
    return this.http.delete(this.environment.urlAsignatura + "/eliminar" + `/${_id}`);
  }

  getAsignatura(_id: string) :Observable<Asignaturas> {
    return this.http.get<Asignaturas>(this.environment.urlAsignatura + `/${_id}`);
  }

}
