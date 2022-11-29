import { Component, OnInit } from '@angular/core';
import { PostsApiService } from '../../services/posts-api.service';
import { BehaviorSubject } from 'rxjs';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts$ = new BehaviorSubject<IPost[] | null>(null);

  constructor(private postsApiService: PostsApiService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postsApiService
      .getPosts()
      .subscribe((posts) => this.posts$.next(posts));
  }

  addNew() {
    const post = {
      title: (Math.random() * 10000).toString(),
      author: 'angular',
    };
    this.postsApiService.postPost(post).subscribe((newPost) => {
      const oldPosts = this.posts$.getValue() ?? [];
      this.posts$.next([...oldPosts, newPost]);
    });
  }

  deletePost(id: string) {
    this.postsApiService.deletePost(id).subscribe(() => {
      const oldPosts = this.posts$.getValue() ?? [];
      this.posts$.next(oldPosts.filter((post) => post.id !== id));
    });
  }
}
