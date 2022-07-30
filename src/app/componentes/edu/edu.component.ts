
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { edu } from 'src/app/Model/edu';
import { EduService } from 'src/app/service/edu.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  public educaciones:edu[]=[];
  public editEdu: edu | undefined;
  public deleteEdu: edu | undefined;
 
  constructor(private eduService:EduService) { }

  ngOnInit(): void {
    this.getEducation();
  }

    public getEducation():void{
      this.eduService.getEducacion().subscribe({
      next:(response:edu[])=>{
        this.educaciones = response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }  
      })

    }

    public onOpenModal(mode:String, educacion?: edu ):void{
      const container = document.getElementById("main-container");
      const button= document.createElement('button');
      button.style.display='none';
      button.setAttribute('data-toggle', 'modal');
      if(mode==='add'){
        button.setAttribute('data-target', '#addEducationModal'); 
      } else if(mode==='delete'){
        this.deleteEdu= educacion;
        button.setAttribute('data-target', '#deleteEducationModal');
      } else if(mode==='edit'){
        this.editEdu= educacion;
        button.setAttribute('data-target', '#editEducationModal');
      }
      container?.appendChild(button);
      button.click();
    }

    public onAddEducation(addForm: NgForm){
      document.getElementById('add-education-form')?.click();
      this.eduService.addEdu(addForm.value).subscribe({
        next: (response:edu)=>{
          console.log(response);
          this.getEducation();
          addForm.reset();
        },
        error: (error:HttpErrorResponse)=>{
          alert(error.message);
          addForm.reset();
        }
      })
    }

    public onUpdateEducation(educacion :edu){
      this.editEdu= educacion;
      document.getElementById('add-education-form')?.click();
      this.eduService.updateEdu(educacion).subscribe({
        next: (response:edu)=>{
          console.log(response);
          this.getEducation();   
        },
        error: (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }

    public onDeleteEducation(eduId:number):void{
      this.eduService.deleteEdu(eduId).subscribe({
        next: (response:void) =>{
          console.log(response);
          this.getEducation();
        },
        error: (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }
}


