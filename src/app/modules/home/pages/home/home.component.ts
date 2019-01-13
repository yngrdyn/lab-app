import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogConfig} from '@angular/material';

import { Message } from '../../../../core/models/message';

import { MessagesService } from '../../../../core/services/message.service';

import { DialogBodyComponent } from '../../components/dialog-body/dialog-body.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messageList: Message[];
  displayedColumns = ['crewLogin', 'phoneNumber','base','sentDate', 'status'];

  constructor(
    private dialog: MatDialog,
    private messagesService: MessagesService
  ) {}

  ngOnInit() {
    this.messagesService.list().subscribe(
      res=>this.messageList = res
    );
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(DialogBodyComponent, dialogConfig);
  }

  resendMessage(message:any) {
    console.log('Resend message: ', message);
  }

}
