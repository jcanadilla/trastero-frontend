import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import Quagga from 'quagga';


@Component({
  selector: 'ngx-scanner-dialog',
  templateUrl: 'scanner-dialog.component.html',
  styleUrls: ['scanner-dialog.component.scss'],
})
export class ScannerDialogComponent implements OnInit, OnDestroy {

  codigo: string;
  scanned: Boolean = false;
  onDetected = function (data) {
    this.codigo = data.codeResult.code;
    this.scanned = true;
    this.eventsInitialized = true;
    this.pauseScanner();
  }.bind(this);

  constructor(protected ref: NbDialogRef<ScannerDialogComponent>) { }

  ngOnInit() {
    this.initScanner();
  }

  ngOnDestroy() {
    this.cleanScanner();
    this.stopScanner();
  }

  initScanner(): void {
    const these = this;
    Quagga.init({
      numOfWorkers: 1,
      inputStream: {
        name: "Live",
        type: "LiveStream",
        constraints: {
          width: '10rem',
        }
      },
      decoder: {
        readers: ["ean_reader"]
      }
    }, function (err) {
      if (err) {
        console.log(err);
        return
      }
      console.log("Initialization finished. Ready to start");
      these.initScannerEvents();
      these.startScanner();
    });
  }

  startScanner(): void {
    Quagga.start();
  }

  stopScanner(): void {
    Quagga.stop();
  }

  pauseScanner(): void {
    Quagga.pause();
  }

  retryScan(): void {
    this.codigo = '';
    this.scanned = false;
    this.startScanner();
  }

  cleanScanner(): void {
    Quagga.offDetected();
  }

  initScannerEvents(): void {
    Quagga.onDetected(this.onDetected);
  }

  cancel() {
    this.stopScanner();
    this.ref.close();
  }

  submit() {
    this.ref.close(this.codigo);
  }

  manualInput(event) {
    const value = event.target.value;
    console.log(value);
    this.codigo = value;
    if (value !== '' && value !== undefined && value !== null) {
      this.scanned = true;
    } else {
      this.scanned = false;
    }
  }
}
