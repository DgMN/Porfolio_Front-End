import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { edu } from '../Model/edu';

@Injectable({
  providedIn: 'root'
})
export class EduService {
  private apiServeUrl= "https://djaltsyn-porfolio-back-end.herokuapp.com/";

  constructor(private http: HttpClient) {}

public getEducacion(): Observable<edu[]>{
    return this.http.get<edu[]>(`${this.apiServeUrl}/edu/ver`);    
  }
public addEdu(edu:edu):Observable<edu>{
  return this.http.post<edu>(`${this.apiServeUrl}/edu/crear`, edu); 
}
public updateEdu(edu:edu):Observable<edu>{
  return this.http.put<edu>(`${this.apiServeUrl}/edu/editar`, edu); 
}
public deleteEdu(eduId:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServeUrl}/edu/borrar/${eduId}`); 
}

}
