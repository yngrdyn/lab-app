import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {

  @Input() status: string;
  @Output() resend = new EventEmitter<any>();

  constructor() { } 

  resendClicked() {
    this.resend.emit();
  }

}

