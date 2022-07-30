import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDto } from '../Model/jwtDto';
import { nuevoUsuario } from '../Model/nuevo-usuario';
import { LoginUsuario } from '../Model/login-usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 authUrl = "http://localhost:8080/auth/";
  constructor(private http: HttpClient) { }

  public nuevo(nuevoUser:nuevoUsuario):Observable<any>{
    return this.http.post<any>(this.authUrl +"nuevo", nuevoUser);
  }

  public login(loginUsuario: LoginUsuario):Observable<jwtDto>{
    return this.http.post<jwtDto>(this.authUrl+"login", loginUsuario);

  }
}
