import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
  providers: [DialogService]
})
export class LoginModalComponent implements OnInit{

  ngOnInit() {
  }

  ref: DynamicDialogRef;

  constructor(private route: ActivatedRoute, private router: Router, private dialogRef: DynamicDialogRef) { }

  openHomePage() {
    //navigate to home
    this.router.navigate(['home']);
    //close modal
    this.dialogRef.close();
    this.dialogRef.destroy();
  }

}
