import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { SubjectsService } from 'src/app/Services/subjects.service';
import { SubjectModel } from 'src/app/Models/subject.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-subjects',
  templateUrl: './modal-subjects.component.html',
  styleUrls: ['./modal-subjects.component.css']
})
export class ModalSubjectsComponent implements OnInit {

  constructor(private subjectService: SubjectsService,
              private activeModal: NgbActiveModal) { }
  subject: SubjectModel = new SubjectModel();
  modalHeader = 'Crear materia';

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

  closeModal() {
    this.activeModal.close();
  }

    createSubject(form: NgForm) {
    this.showLoadingPlease();
    this.subjectService.createSubject(this.subject).subscribe((data) => {
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
