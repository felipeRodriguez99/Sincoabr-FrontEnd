import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeachersService } from 'src/app/Services/teachers.service';
import { TeacherModel } from 'src/app/Models/teacher.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-teacher',
  templateUrl: './modal-teacher.component.html',
  styleUrls: ['./modal-teacher.component.css']
})
export class ModalTeacherComponent implements OnInit {

  constructor(private teacherService: TeachersService,
              private activeModal: NgbActiveModal) { }
  teacher: TeacherModel = new TeacherModel();
  ngOnInit() {
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

  createTeacher(form: NgForm) {
    this.showLoadingPlease();
    this.teacher.password = '12345';
    this.teacher.rolId = 'DBC83F6D-F11B-4DA6-BA5E-3E405CB7DEAF';
    this.teacherService.createTeacher(this.teacher).subscribe((data) => {
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

  closeModal() {
    this.activeModal.close();
  }

}
