import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
import { ToggleService } from '../shared/toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'landingPage';

  constructor(private titleService: Title, private breadcrumbService: BreadcrumbService, public toggleService: ToggleService) {
  }

  //toggle sidebar
  toggleState: boolean = true;

  toggle() {
    console.log(this.toggleState);
    this.toggleState = !this.toggleState;
    this.toggleService.setState(this.toggleState);
  }

  //breadcrumbs
  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      this.titleService.setTitle(this.createTitle(crumbs));
    })
  }

  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'Employee Management System';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
  }

  private titlesToString(titles: any) {
    return titles.reduce((prev: any, curr: any) => {
      return `${curr.displayName} - ${prev}`;
    }, '');
  }

}
