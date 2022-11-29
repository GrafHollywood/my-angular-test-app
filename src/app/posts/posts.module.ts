import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostToolbarComponent } from './components/post-toolbar/post-toolbar.component';

@NgModule({
  declarations: [PostsListComponent, PostCardComponent, PostToolbarComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export default class PostsModule {}
