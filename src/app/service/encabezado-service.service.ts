import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona} from '../Model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoServiceService {
  private apiServeUrl = "https://djaltsyn-porfolio-back-end.herokuapp.com/";
  httpClient: any;
  persona: persona|undefined;

  constructor(private http: HttpClient) { }

  public getPersona():Observable<persona> {
    return this.http.get<persona>(`${this.apiServeUrl}/persona/id/1`);
  }

  public editarPersona(persona: persona):Observable<persona>{
    return this.http.put<persona>(`${this.apiServeUrl}/persona/editar`, persona)
  }


}