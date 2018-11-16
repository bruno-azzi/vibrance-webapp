import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './../shared/shared.module';
import { FavoritesProfilesService } from './favorites-profiles.service';
import { FavoritesProfilesComponent } from './favorites-profiles.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    FavoritesProfilesService
  ],
  exports: [
    ProfileComponent,
    FavoritesProfilesComponent
  ],
  declarations: [
    ProfileComponent,
    FavoritesProfilesComponent
  ]
})
export class FavoritesProfilesModule { }
