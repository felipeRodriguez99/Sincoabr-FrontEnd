import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { StudentsService } from 'src/app/Services/students.service';
import { StudentModel } from 'src/app/Models/student.model';
import { StudentListModel } from 'src/app/Models/studentList.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalStudentComponent } from '../../Modals/modal-student/modal-student.component';
import { ModalStudentCreateComponent } from '../../Modals/modal-student-create/modal-student-create.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  json: any;
  code: string;
  student: StudentModel = new StudentModel();
  studentUpdate: StudentModel = new StudentModel();
  studentsList: StudentListModel [] = [];


  constructor(private studentsService: StudentsService,
              private modalService: NgbModal) { }

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
    Swal.showLoading();
  }


  ngOnInit() {
    this.showLoadingPlease();
    this.studentsService.getStudent().subscribe((data) => {
      this.studentsList = data;
      Swal.close();
      }, (error) => {

      });
  }

  getStudentByCode(form: NgForm) {
    this.showLoadingPlease();
    this.studentsService.getStudentByCode(this.code).subscribe((data) => {
      this.studentUpdate = data;
      Swal.close();
      }, (error) => {
        Swal.close();
        if (error.statusText.includes('Unknown Error')) {
          this.showLoadingError('Error de conexion');
          console.log(error);
        } else {
          this.showLoadingError(error);
          console.log(error);
        }
      });
  }

  showModalStudent(json: any) {
    this.showLoadingPlease();
    const activeModal = this.modalService.open(ModalStudentComponent, { size: 'lg' });
    activeModal.componentInstance.student = json;
    Swal.close();
  }

  showModalStudentCreate() {
    this.showLoadingPlease();
    const activeModal = this.modalService.open(ModalStudentCreateComponent, { size: 'lg' });
    Swal.close();
  }



}
