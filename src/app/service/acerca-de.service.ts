import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AcercaDe } from '../Model/acercaDe';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  private apiServeUrl = "https://djaltsyn-porfolio-back-end.herokuapp.com/"

  constructor(private http:HttpClient) { }

  public getAcercaDe(): Observable<AcercaDe>{
    return this.http.get<AcercaDe>(`${this.apiServeUrl}/acercaDe/id/58`);
  }

  public addAcercaDe(acerca:AcercaDe): Observable<AcercaDe>{
    return this.http.post<AcercaDe>(`${this.apiServeUrl}/acercaDe/crear`,acerca);
  }
  public updateAcercaDe(acerca:AcercaDe): Observable<AcercaDe>{
    return this.http.put<AcercaDe>(`${this.apiServeUrl}/acercaDe/editar`,acerca);
  }

  public deleteAcercaDe(idAcerca:number): Observable<void>{
    return this.http.delete<void>(`${this.apiServeUrl}/acercaDe/borrar/${idAcerca}`)
  }
}
