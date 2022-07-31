import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../Model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiServeUrl= "http://localhost:8080/";

  constructor(private http: HttpClient) {}

public getProyectos():Observable<Proyectos[]> {
  return this.http.get<Proyectos[]>(`${this.apiServeUrl}/proyectos/ver`);
}

public addProyectos(proy:Proyectos):Observable<Proyectos>{
  return this.http.post<Proyectos>(`${this.apiServeUrl}/proyectos/crear`,proy);
}
public updateProyectos(proy:Proyectos):Observable<Proyectos>{
  return this.http.put<Proyectos>(`${this.apiServeUrl}/proyectos/editar`,proy);
}
public deletProyectos(idProyect:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServeUrl}/proyectos/borrar/${idProyect}`);
}
}
