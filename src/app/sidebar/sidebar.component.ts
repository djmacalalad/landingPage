import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleService } from '../shared/toggle.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, public toggleService: ToggleService) { }

  //panel menu
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Jennie Kimberly',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            routerLink: '/'
          }
        ]
      }
    ];
  }

  //get toggle state
  toggleState: boolean = this.toggleService.getState();

}
