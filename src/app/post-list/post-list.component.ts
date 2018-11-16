import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { PostListService } from './../post-list/post-list.service';
import { Post } from './../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostListComponent implements OnInit {
  
  postList: Post[];

  constructor(private postListService: PostListService) { }

  ngOnInit() {
    this.postListService.getPostList().subscribe((data) => {
      this.postList = data
    }, error => {
      console.log(error);
    })
  }

}
