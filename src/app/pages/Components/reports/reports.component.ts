import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ReportsService } from 'src/app/Services/reports.service';
import { Reportsmodel } from 'src/app/Models/reports.model';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  @ViewChild('table', { static: false }) table: ElementRef;

  constructor(private reportsService: ReportsService) { }
  reports: Reportsmodel [] = [];


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
    this.reportsService.getReport().subscribe((data) => {
      this.reports = data;
      console.log(data);
      }, (error) => {

      });
  }

  exportar() {
    const fechaGeneracion = new Date().toISOString().slice(0, 10);
    this.showLoadingPlease();
    // const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.reports);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reporte');
    /* save to file */
    XLSX.writeFile(wb, 'Reporte(' + fechaGeneracion + ').xlsx');
    Swal.close();
  }


}
