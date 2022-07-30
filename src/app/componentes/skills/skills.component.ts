import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { skills } from 'src/app/Model/skills';
import { SkillsService } from 'src/app/service/skills.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: skills[] = [];
  public editSkill:skills| undefined;
  public deleteSkills:skills| undefined;

  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }
 
  public getSkills(): void {
    this.skillService.getSkills().subscribe({
      next: (response:skills[]) =>{
        this.skills = response;
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, skill?: skills ):void{
    const container = document.getElementById("main-container");
    const button= document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-target', '#addSkillsModal'); 
    } else if(mode==='delete'){
      this.deleteSkills= skill;
      button.setAttribute('data-target', '#deleteSkillsModal');
    } else if(mode==='edit'){
      this.editSkill= skill;
      button.setAttribute('data-target', '#editSkillsModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddSkills(addForm: NgForm){
    document.getElementById('add-skills-form')?.click();
    this.skillService.addSkills(addForm.value).subscribe({
      next: (response:skills)=>{
        console.log(response);
        this.getSkills();
        addForm.reset();
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public onUpdateSkills(skill : skills){
    this.editSkill= skill;
    document.getElementById('add-skills-form')?.click();
    this.skillService.updateSkills(skill).subscribe({
      next: (response:skills)=>{
        console.log(response);
        this.getSkills();   
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onDeleteSkill(idSkill:number):void{
    this.skillService.deleteSkills(idSkill).subscribe({
      next: (response:void) =>{
        console.log(response);
        this.getSkills();
      },
      error: (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
