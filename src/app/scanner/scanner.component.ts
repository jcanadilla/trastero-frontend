import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ScannerDialogComponent } from './scanner-dialog/scanner-dialog.component';

@Component({
  selector: 'ngx-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {


  scannerStarted: Boolean = false

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {

  }

  scan(): void {
    this.dialogService.open(ScannerDialogComponent)
      .onClose.subscribe((codigo) => {
        console.log('SCANNED CODIGO!', codigo);
      });
  }

}
