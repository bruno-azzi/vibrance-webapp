import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RegisterComponent
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
