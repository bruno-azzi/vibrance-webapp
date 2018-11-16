import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyProfileComponent implements OnInit {

  name = 'Nick Bailey'
  location = 'San Francisco'
  likes = '234'
  comments = '81'
  
  constructor() { }

  ngOnInit() {
  }

}
