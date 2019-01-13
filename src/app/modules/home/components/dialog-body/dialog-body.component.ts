import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>
  ){}

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
