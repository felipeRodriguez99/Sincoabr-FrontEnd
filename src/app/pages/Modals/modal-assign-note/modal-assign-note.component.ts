import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';
import { NotesModel } from 'src/app/Models/notes.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ModalTeacherSubjectComponent } from '../../Modals/modal-teacher-subject/modal-teacher-subject.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-assign-note',
  templateUrl: './modal-assign-note.component.html',
  styleUrls: ['./modal-assign-note.component.css']
})
export class ModalAssignNoteComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal,
              private notesService: NotesService) { }

  note: NotesModel = new NotesModel();

  modalHeader = 'Asignar nota';

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

  updateNote(form: NgForm) {
    this.showLoadingPlease();
    this.notesService.updateNote(this.note).subscribe((data) => {
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
