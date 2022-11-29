import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [PostsListComponent, PostCardComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export default class PostsModule {}
