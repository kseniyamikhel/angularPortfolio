import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { ProjectsService } from './services/projects.service';
import { AuthService } from './services/auth.service';

import { routes } from './app-routing.module';
import { ProjectDatePipe } from './pipes/project-date.pipe';

const firebaseConfig = {
  apiKey: "AIzaSyAvgeDW9W7RDDjx7sTeo-xH5u4GC6VmGUg",
  authDomain: "portfolio-1acb9.firebaseapp.com",
  databaseURL: "https://portfolio-1acb9.firebaseio.com",
  projectId: "portfolio-1acb9",
  storageBucket: "",
  messagingSenderId: "612053576605",
  appId: "1:612053576605:web:c32967dd71de317a"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig, 'portfolio'),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    BioComponent,
    ProjectsComponent,
    AdminComponent,
    HomeComponent,
    ProjectDatePipe
  ],
  bootstrap: [AppComponent],
  providers: [
    ProjectsService,
    AngularFireDatabase,
    AuthService,
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
export class AppModule { }
