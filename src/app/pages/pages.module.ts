import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from '../theme/header/header.component';
import { StudentsComponent } from './Components/students/students.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalTeacherSubjectComponent } from './Modals/modal-teacher-subject/modal-teacher-subject.component';
import { ReportsComponent } from './Components/reports/reports.component';




@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    HeaderComponent,
    StudentsComponent,
    SubjectsComponent,
    TeachersComponent,
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class PagesModule { }
