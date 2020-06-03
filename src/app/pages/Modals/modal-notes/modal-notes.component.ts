import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotesModel } from 'src/app/Models/notes.model';
import { NgForm } from '@angular/forms';
import { NotesService } from 'src/app/Services/notes.service';
import { Periods } from 'src/app/Models/periods.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-notes',
  templateUrl: './modal-notes.component.html',
  styleUrls: ['./modal-notes.component.css']
})
export class ModalNotesComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal,
              private notesService: NotesService) { }

  note: NotesModel = new NotesModel();
  notes: NotesModel [] = [];
  periods: Periods [] = [];

  modalHeader = 'Asignar materia';

  ngOnInit() {
    this.notesService.getNotes().subscribe((data) => {
      if (data != null) {
        this.notes = data;
        console.log(data);
      }
      }, (error) => {

      });

    this.notesService.getPeriods().subscribe((data) => {
      if (data != null) {
        this.periods = data;
        console.log(data);
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

  closeModal() {
    this.activeModal.close();
  }

  createNote(form: NgForm) {
    this.showLoadingPlease();
    this.notesService.createNote(this.note).subscribe((data) => {
      if (data != null) {
        console.log(data);
        this.activeModal.close();
        Swal.close();
      }
    }, (error) => {

    });
  }

}
