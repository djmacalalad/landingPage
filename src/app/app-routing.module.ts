import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full'},
  { 
    path: '', 
    component: LandingPageComponent,
    children: [
      { path: 'login', component: LoginModalComponent},
    ]
  },
  { path: 'home', component: HomePageComponent, data: {breadcrumb: 'Home'}},
  { path: 'departments', component: DepartmentsComponent, data: {breadcrumb: 'Departments'}},
  { path: 'employees', component: EmployeesComponent, data: {breadcrumb: 'Employees'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomePageComponent, DepartmentsComponent, EmployeesComponent, LoginModalComponent];
