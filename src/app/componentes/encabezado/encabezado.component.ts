import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/Model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {
  public persona: persona | undefined; 
  public editarpersona: persona | undefined;
  
  constructor(public personaService: PersonaService) { }

  ngOnInit():void {
    this.getPersona();
  }
  getPersona():void {
    this.personaService.getPersona().subscribe({ 
      next:(response:persona) => {
       this.persona = response
       
       },
       error:(error:HttpErrorResponse)=>{
        alert(error.message);
       } 
      });
  }
  public onOpenModal(mode:string, persona?:persona):void{
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.style.display= 'none';
    button.setAttribute('data-toggle', 'modal');
     if(mode ==='edit'){
      this.editarpersona = persona;
      button.setAttribute('data-target', '#editPersonaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onUpdatePersona(persona :persona){
    this.editarpersona= persona;
    document.getElementById('add-persona-form')?.click();
    this.personaService.editarPersona(persona).subscribe({
      next: (response: persona) =>{
        console.log(response);
         this.getPersona();
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
