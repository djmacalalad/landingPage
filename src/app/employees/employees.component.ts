import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../shared/toggle.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public toggleService: ToggleService) {
  }

  //get toggle state
  toggleState: boolean = this.toggleService.getState();

  ngOnInit() {
    this.toggleService.setState(true);
  }

  ngOnDestroy() {
    this.toggleService.setState(false);
  }

}
