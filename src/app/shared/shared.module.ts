import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TabsComponent,
    HeaderComponent
  ],
  exports: [
    TabsComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
