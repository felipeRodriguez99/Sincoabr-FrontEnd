import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/Services/teachers.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { TeacherSubject } from 'src/app/Models/teachers-subject.model';
import { NotesService } from 'src/app/Services/notes.service';
import { NotesModel } from 'src/app/Models/notes.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-teacher-subject',
  templateUrl: './modal-teacher-subject.component.html',
  styleUrls: ['./modal-teacher-subject.component.css']
})
export class ModalTeacherSubjectComponent implements OnInit {

  constructor(private teacherService: TeachersService,
              private activeModal: NgbActiveModal,
              private notesService: NotesService) { }

  teachersubject: TeacherSubject = new TeacherSubject();
  notes: NotesModel [] = [];
  ngOnInit() {
    this.notesService.getNotes().subscribe((data) => {
      if (data != null) {
        this.notes = data;
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

  createTeacherSubject(form: NgForm) {
    this.showLoadingPlease();
    this.teacherService.createTeacherSubject(this.teachersubject).subscribe((data) => {
      if (data != null) {
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
