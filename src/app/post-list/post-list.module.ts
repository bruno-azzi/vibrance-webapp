import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
//import { PostListService } from './post-list.service';
import { PostListComponent } from './post-list.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
  ],
 /*  providers: [
    PostListService
  ], */
  exports: [
    PostListComponent,
    PostComponent
  ],
  declarations: [
    PostComponent, 
    PostListComponent
  ]
})
export class PostListModule { }
