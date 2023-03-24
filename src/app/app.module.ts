import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import { AboutComponent } from './components/about/about.component';
import { MycardComponent } from './components/mycard/mycard.component';
import { AboutCard1Component } from './components/about-card1/about-card1.component';
import { AboutCard2Component } from './components/about-card2/about-card2.component';
import { AboutCard3Component } from './components/about-card3/about-card3.component';
import { AboutCard4Component } from './components/about-card4/about-card4.component';
import { AboutCard5Component } from './components/about-card5/about-card5.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DegreeComponent } from './components/degree/degree.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import {SwiperModule} from "swiper/angular";
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RateComponent } from './components/rate/rate.component';
import { FooterComponent } from './components/footer/footer.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    MycardComponent,
    AboutCard1Component,
    AboutCard2Component,
    AboutCard3Component,
    AboutCard4Component,
    AboutCard5Component,
    SkillsComponent,
    DegreeComponent,
    TechStackComponent,
    ProjectsComponent,
    ContactsComponent,
    RateComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    SwiperModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
