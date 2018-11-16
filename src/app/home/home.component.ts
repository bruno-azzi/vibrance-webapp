import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toggle = false;

  openEvent(toggle: boolean) {
    this.toggle = toggle;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
