import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  tabList: any[] = [
    {
      'title': 'Latest',
      'link': 'latest'
    },
    {
      'title': 'Favorites',
      'link': 'favorites'
    },
    {
      'title': 'All',
      'link': 'all'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
