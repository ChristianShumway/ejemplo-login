import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../material/material.module';

import { SingInComponent } from './components/sing-in/sing-in.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    SingInComponent, 
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
