import { PD } from './pd';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  p = PD;
  posts:Post[];
  constructor(private postsService: PostsService) {}

  
  getPosts(): void {
    this.postsService.getPosts().subscribe(posts => this.posts = this.posts);
  }

  ngOnInit() {
     this.getPosts();
  }

}
