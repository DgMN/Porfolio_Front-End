import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { skills } from '../Model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiServeUrl = "http://localhost:8080/";


  constructor(private http: HttpClient) {}

  public getSkills():Observable<skills[]>{
    return this.http.get<skills[]>(`${this.apiServeUrl}/skills/ver`);
  }

  public addSkills(skill:skills[]):Observable<skills>{
    return this.http.post<skills>(`${this.apiServeUrl}/skills/crear`, skill);
  }

  public updateSkills(skill:skills):Observable<skills>{
    return this.http.put<skills>(`${this.apiServeUrl}/skills/editar`, skill);
  }

  public deleteSkills(idSkill:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/skills/borrar/${idSkill}`);
  }
}
