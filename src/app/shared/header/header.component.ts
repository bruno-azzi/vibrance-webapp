import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  sectionTitle = 'Home';

  profiles: any[] = [
    {
      'img': './../../../assets/img/profile/profile-picture-2.png',
      'name': 'Twanda Keaton',
      'profession': 'Product Designer'
    }
  ]

  itemList: any[] = [
    {
      'title': 'Worldwide',
      'link': '/home/latest',
      'counter': '555'
    },
    {
      'title': 'Trending',
      'link': '/home/latest',
      'section': 'trending',
      'counter': '55'
    },
    {
      'title': 'Places',
      'link': '/home/latest',
      'section': 'places',
      'counter': '5'
    },
    {
      'title': 'People',
      'link': '/home/latest',
      'section': 'people',
      'counter': '55'
    },
    {
      'title': 'Notifications',
      'link': '/home/latest',
      'section': 'notifications',
      'counter': '555'
    }
  ]

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
