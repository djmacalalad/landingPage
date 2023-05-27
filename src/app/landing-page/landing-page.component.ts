import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [DialogService]
})
export class LandingPageComponent implements OnDestroy {

  ngOnDestroy()   {

  }

  ref: DynamicDialogRef;

  constructor(public dialogService: DialogService) { }

  show() {
    this.ref = this.dialogService.open(LoginModalComponent, { position: 'center', header: 'LOGIN' });
  }

}
