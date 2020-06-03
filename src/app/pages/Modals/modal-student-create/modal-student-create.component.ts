import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { StudentsService } from 'src/app/Services/students.service';
import { StudentModel } from 'src/app/Models/student.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-student-create',
  templateUrl: './modal-student-create.component.html',
  styleUrls: ['./modal-student-create.component.css']
})
export class ModalStudentCreateComponent implements OnInit {

  student: StudentModel = new StudentModel();
  constructor(private studentsService: StudentsService,
              private activeModal: NgbActiveModal) { }

  modalHeader = 'Crear alumno';

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
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


  createStudent(form: NgForm) {
    this.showLoadingPlease();
    this.student.password = '1234';
    this.student.rolId = '3F4BB386-2184-49A0-9291-0AAF890719E5';
    console.log(this.student);
    this.studentsService.createStudent(this.student).subscribe((data) => {
      if (data != null) {
        console.log(data);
        this.activeModal.close();
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

}
