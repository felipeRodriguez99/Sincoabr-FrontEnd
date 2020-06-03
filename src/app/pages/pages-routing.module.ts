import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './Components/home/home.component';
import { combineLatest } from 'rxjs';
import { StudentsComponent } from './Components/students/students.component';
import { SubjectsComponent } from './Components/subjects/subjects.component';
import { TeachersComponent } from './Components/teachers/teachers.component';
import { ReportsComponent } from './Components/reports/reports.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [{
      path: 'home',
      component: HomeComponent
    }, {
      path: 'students',
      component: StudentsComponent
    }, {
      path: 'subjects',
      component: SubjectsComponent
    }, {
      path: 'teachers',
      component: TeachersComponent
    }, {
      path: 'reports',
      component: ReportsComponent
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    }, {
      path: '**',
      redirectTo: 'home',
      pathMatch: 'full',
    }],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
