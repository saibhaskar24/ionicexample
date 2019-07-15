import { Injectable } from '@angular/core';
import { PD } from './tab1/pd';
import { Post } from './tab1/post';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  getPosts(): Observable<Post[]> {
    return of(PD);
  }


  constructor() { }
}
