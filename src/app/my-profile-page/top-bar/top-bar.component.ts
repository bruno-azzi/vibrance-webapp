import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopBarComponent implements OnInit {

  followersCounter = '3285'

  @Output() onOpenMenu = new EventEmitter<boolean>();
  toggle = false;

  openMenu(toggle: boolean) {
    this.toggle = toggle === true ? false : true;
    this.onOpenMenu.emit(this.toggle);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
