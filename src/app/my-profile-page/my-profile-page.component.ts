import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styleUrls: ['./my-profile-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyProfilePageComponent implements OnInit {
  
  toggle = false;

  openEvent(toggle: boolean) {
    this.toggle = toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
