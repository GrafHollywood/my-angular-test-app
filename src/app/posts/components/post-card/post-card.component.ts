import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() post!: IPost;
  @Output() deletePost = new EventEmitter<string>();

  delete() {
    this.deletePost.emit(this.post.id);
  }
}
