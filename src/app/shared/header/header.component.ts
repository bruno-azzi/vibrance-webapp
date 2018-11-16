import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

import { Post } from './../../model/post';
import { PostListService } from 'src/app/post-list/post-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  sectionTitle = 'Home';

  @Input() post: Post;
  postList: Post[];
  user: Post;

  // profiles: any[] = [
  //   {
  //     'img': './../../../assets/img/profile/profile-picture-2.png',
  //     'name': 'Twanda Keaton',
  //     'profession': 'Product Designer'
  //   }
  // ]

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

  constructor(private service: PostListService) { }

  ngOnInit() {
    this.service.getUser().subscribe((data: Post) => {
      this.user = data;
       console.log(data)
       
     }, error => {
       console.log(error);
     })
  }



}
