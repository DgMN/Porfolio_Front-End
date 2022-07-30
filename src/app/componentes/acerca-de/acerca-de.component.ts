
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/Model/acercaDe';
import { AcercaDeService } from 'src/app/service/acerca-de.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public acercaDe:AcercaDe| undefined;
  public editarAcerca: AcercaDe | undefined;
 
 
  constructor(private acercaDeService:AcercaDeService) { }

  ngOnInit(): void {
    this.getAcercaDe();
  }
  getAcercaDe():void {
    this.acercaDeService.getAcercaDe().subscribe({
      next: (response:AcercaDe)=>{
        this.acercaDe= response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }   
    })
  }
  public onOpenModal(mode:string, acercaDe?:AcercaDe):void{
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.style.display= 'none';
    button.setAttribute('data-toggle', 'modal');
     if(mode ==='edit'){
      this.editarAcerca = acercaDe;
      button.setAttribute('data-target', '#editAcercaModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onUpdateAcercaDe(acercaDe :AcercaDe){
    this.editarAcerca= acercaDe;
    document.getElementById('add-acercaDe-form')?.click();
    this.acercaDeService.updateAcercaDe(acercaDe).subscribe({
      next: (response: AcercaDe) =>{
        console.log(response);
         this.getAcercaDe();
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
