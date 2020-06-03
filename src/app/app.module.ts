import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalStudentComponent } from './pages/Modals/modal-student/modal-student.component';
import { ModalStudentCreateComponent } from './pages/Modals/modal-student-create/modal-student-create.component';
import { ModalSubjectsComponent } from './pages/Modals/modal-subjects/modal-subjects.component';
import { ModalTeacherComponent } from './pages/Modals/modal-teacher/modal-teacher.component';
import { ModalNotesComponent } from './pages/Modals/modal-notes/modal-notes.component';
import { ModalAssignNoteComponent } from './pages/Modals/modal-assign-note/modal-assign-note.component';
import { ModalTeacherSubjectComponent } from './pages/Modals/modal-teacher-subject/modal-teacher-subject.component';


@NgModule({
  entryComponents: [
    ModalStudentComponent,
    ModalStudentCreateComponent,
    ModalSubjectsComponent,
    ModalTeacherComponent,
    ModalNotesComponent,
    ModalAssignNoteComponent,
    ModalTeacherSubjectComponent
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ModalStudentComponent,
    ModalStudentCreateComponent,
    ModalSubjectsComponent,
    ModalTeacherComponent,
    ModalNotesComponent,
    ModalAssignNoteComponent,
    ModalTeacherSubjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
