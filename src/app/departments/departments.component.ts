import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../shared/toggle.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(public toggleService: ToggleService) { }

  //get toggle state
  toggleState: boolean = this.toggleService.getState();

  ngOnInit() {
    this.toggleService.setState(true);
  }

  ngOnDestroy() {
    this.toggleService.setState(false);
  }

}
