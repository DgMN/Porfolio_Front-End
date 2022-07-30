import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyectos } from 'src/app/Model/proyecto';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyecto: Proyectos[]=[];
  public editProy: Proyectos| undefined;
  public deleteProy: Proyectos| undefined;

  constructor(private proyService: ProyectosService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  public getProyectos(): void {
    this.proyService.getProyectos().subscribe({
      next: (response:Proyectos[])=>{
        this.proyecto = response;
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:string, proyect?:Proyectos):void{
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.style.display= 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-target', '#addProyectModal');
    }else if(mode==='edit'){
      this.editProy= proyect;
      button.setAttribute('data-target', '#editProyectModal');
    }else if(mode==='delete'){
      this.deleteProy= proyect;
      button.setAttribute('data-target', '#deleteProyectModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddProyectos(addForm: NgForm){
    document.getElementById('add-proyectos-form')?.click();
    this.proyService.addProyectos(addForm.value).subscribe({
      next: (response:Proyectos)=>{
        console.log(response);
        this.getProyectos();
        addForm.reset();
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onUpdateProyectos(proyect :Proyectos){
    this.editProy= proyect;
    document.getElementById('add-proyectos-form')?.click();
    this.proyService.updateProyectos(proyect).subscribe({
      next: (response:Proyectos)=>{
        console.log(response);
        this.getProyectos();   
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteProyectos(idProyect:number):void{
    this.proyService.deletProyectos(idProyect).subscribe({
      next: (response:void) =>{
        console.log(response);
        this.getProyectos();
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
