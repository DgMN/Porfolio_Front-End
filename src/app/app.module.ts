import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EduComponent } from './componentes/edu/edu.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { interceptorProvider } from './service/interceptor.service';
import { FooterComponent } from './componentes/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EncabezadoComponent,
    EduComponent,
    SkillsComponent,
    ProyectosComponent,
    AcercaDeComponent,
    IniciarSesionComponent,
    PorfolioComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      radius:100,
      showImage:true,
      imageHeight:80,
      imageWidth:80,
      outerStrokeWidth: 37,
      space:8,
      innerStrokeWidth: 5,
      outerStrokeLinecap:"'square'",
      outerStrokeGradient:true,
      animation:true,
      animationDuration:600
    }),
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
