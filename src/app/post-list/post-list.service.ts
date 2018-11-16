import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from './../model/post';

@Injectable()
export class PostListService {

  constructor(private http: HttpClient) { }

  getPostList(): Observable<Post[]> {

    return this.http.get(environment.apiUrl + '5bef245b2e00005742eeebc2').pipe(map((data: any) => {

      return data.map((postItem) => {
        const post = new Post();
        post.img = postItem.img;
        post.link = postItem.link;
        post.name = postItem.name;
        post.user = postItem.user;
        post.time = postItem.time;
        post.heartCounter = postItem.heartCounter;
        post.commentCounter = postItem.commentCounter;
        post.contentImg = postItem.contentImg;
        post.contentText = postItem.contentText;

        return post;

      });

    }));
  }

  getUser(): Observable<Post> {

    return this.http.get(environment.apiUrl + '5bef245b2e00005742eeebc2').pipe(map((data: any) => {

      const post = new Post();
      post.img = data[0].img;
      post.link = data[0].link;
      post.name = data[0].name;
      post.user = data[0].user;
      post.profession = data[0].profession;

      return post;
    }));
  }

}