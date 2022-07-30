import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/Model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUsuario!:LoginUsuario;
  nombreUsuario!: string;
  password!:string;
  roles:string[] = [];
  errMsg!:string;

 

  constructor(private router:Router, private tokenService:TokenService, private authService : AuthService) {
    
    
   }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data=>{
        this.isLogged=true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles= data.authorities;
        this.router.navigate(["/porfolio"]);
      }, error =>{
        this.isLogged=false;
        this.isLoginFail=true;
        this.errMsg= error.message;

      }
      );

  }

}
