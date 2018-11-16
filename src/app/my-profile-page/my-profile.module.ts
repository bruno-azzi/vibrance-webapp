import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfilePageComponent } from './my-profile-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MyProfilePageComponent,
    MyProfileComponent,
    TopBarComponent
  ],
  exports: [
    MyProfilePageComponent,
    MyProfileComponent
  ]
})
export class MyProfilePageModule { }
