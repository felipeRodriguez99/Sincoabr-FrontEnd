import { Component, OnInit } from '@angular/core';
import { SubjectModel } from 'src/app/Models/subject.model';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubjectsService } from 'src/app/Services/subjects.service';
import { ModalSubjectsComponent } from '../../Modals/modal-subjects/modal-subjects.component';
import { NotesModel } from 'src/app/Models/notes.model';
import { NotesService } from 'src/app/Services/notes.service';
import { ModalNotesComponent } from '../../Modals/modal-notes/modal-notes.component';
import { ModalAssignNoteComponent } from '../../Modals/modal-assign-note/modal-assign-note.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  code: string;
  notes: NotesModel [] = [];
  subjects: SubjectModel [] = [];
  constructor(private subjectService: SubjectsService,
              private notesService: NotesService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.subjectService.getSubject().subscribe((data) => {
      if (data != null) {
        this.subjects = data;
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

  showModalSubject() {
    this.showLoadingPlease();
    const activeModal = this.modalService.open(ModalSubjectsComponent, { size: 'lg' });
    Swal.close();
  }

  showModalAssingNote(json: any) {
    this.showLoadingPlease();
    const activeModal = this.modalService.open(ModalAssignNoteComponent, { size: 'lg' });
    activeModal.componentInstance.note = json;
    Swal.close();
  }

  getNotesByCode() {
    this.showLoadingPlease();
    this.notesService.getNotesByCode(this.code).subscribe((data) => {
      if (data != null) {
        this.notes = data;
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

  showModalAssign() {
    this.showLoadingPlease();
    const activeModal = this.modalService.open(ModalNotesComponent, { size: 'lg' });
    Swal.close();
  }

}
