import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { PostListService } from '../post-list/post-list.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    TabsComponent,
    HeaderComponent
  ],
  providers:[
    PostListService
  ],
  exports: [
    TabsComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
