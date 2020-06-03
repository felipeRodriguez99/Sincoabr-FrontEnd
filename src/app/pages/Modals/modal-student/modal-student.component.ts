import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { StudentsService } from 'src/app/Services/students.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-student',
  templateUrl: './modal-student.component.html',
  styleUrls: ['./modal-student.component.css']
})
export class ModalStudentComponent implements OnInit {

  constructor(private studentsService: StudentsService,
              private activeModal: NgbActiveModal) { }

  student: any;
  modalHeader = 'Actualizar alumno';

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

  updateStudent(form: NgForm) {
    this.showLoadingPlease();
    this.studentsService.updateStudent(this.student).subscribe((data) => {
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
