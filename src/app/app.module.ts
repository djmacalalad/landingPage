import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { HeaderComponent } from './header/header.component';

import { ButtonModule } from 'primeng/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BreadcrumbModule } from 'angular-crumbs';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelMenuModule } from 'primeng/panelmenu';
 
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignupModalComponent,
    routingComponents,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    DynamicDialogModule,
    BreadcrumbModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
