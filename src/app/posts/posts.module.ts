import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostToolbarComponent } from './components/post-toolbar/post-toolbar.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  declarations: [
    PostsListComponent,
    PostCardComponent,
    PostToolbarComponent,
    NewPostComponent,
    PostFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export default class PostsModule {}
