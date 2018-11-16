import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { FavoritesProfilesModule } from './../favorites-profiles/favorites-profiles.module';
import { PostListModule } from './../post-list/post-list.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostListModule,
    FavoritesProfilesModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
