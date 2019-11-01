import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule, MatInputModule, MatSelectModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
