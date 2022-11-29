import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IPost } from '../../interfaces/post';
import { PostsApiService } from '../../services/posts-api.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
  post$?: Observable<IPost>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsApiService: PostsApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.post$ = this.postsApiService.getPostById(id);
    });
  }
}
