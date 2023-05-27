import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToggleService } from '../shared/toggle.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit, OnDestroy {

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
