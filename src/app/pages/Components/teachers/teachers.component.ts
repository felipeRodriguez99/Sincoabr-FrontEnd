import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/Services/teachers.service';
import { NgForm } from '@angular/forms';
import { TeacherModel } from 'src/app/Models/teacher.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTeacherComponent } from '../../Modals/modal-teacher/modal-teacher.component';
import { TeacherSubject } from 'src/app/Models/teachers-subject.model';
import { ModalTeacherSubjectComponent } from '../../Modals/modal-teacher-subject/modal-teacher-subject.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: TeacherModel [] = [];
  code: string;
  teacherSubjects: TeacherSubject [] = [];

  constructor(private teacherService: TeachersService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.teacherService.getTeacher().subscribe((data) => {
      if (data != null) {
        this.teachers = data;
      }
      }, (error) => {

      });
  }

  showLoadingPlease() {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor'
    });
    Swal.showLoading();
  }

  showLoadingError(error: string) {
    Swal.fire({
      // allowOutsideClick: false,
      icon: 'error',
      text: error
    });
  }

  showModalTeacher() {
    this.showLoadingPlease();
    const activeModal = this.modalService.open(ModalTeacherComponent, { size: 'lg' });
    Swal.close();
  }

  isActiveTeacher(json: any) {
    this.showLoadingPlease();
    this.teacherService.isActiveTeacher(json.code).subscribe((data) => {
      if (data != null) {
        console.log(data);
        Swal.close();
      }
    }, (error) => {
      Swal.close();
      if (error.statusText.includes('Unknown Error')) {
        this.showLoadingError('Error de conexion');
        console.log(error);
      } else {
        this.showLoadingError(error.error.Message);
        console.log(error);
      }
    });
  }

  getTeacherSubject() {
    this.showLoadingPlease();
    this.teacherService.GetTeacherSubject(this.code).subscribe((data) => {
      if (data != null) {
        this.teacherSubjects = data;
        console.log(data);
        Swal.close();
      }
      }, (error) => {
        Swal.close();
        if (error.statusText.includes('Unknown Error')) {
          this.showLoadingError('Error de conexion');
          console.log(error);
        } else {
          this.showLoadingError(error.error.Message);
          console.log(error);
        }
      });
  }


  showModalAssing(json: any) {
    this.showLoadingPlease();
    const activeModal = this.modalService.open(ModalTeacherSubjectComponent, { size: 'lg' });
    activeModal.componentInstance.note = json;
    Swal.close();
  }

}
