import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './components/posts-list/posts-list.component';

@NgModule({
  declarations: [PostsListComponent],
  imports: [CommonModule, PostsRoutingModule],
})
export default class PostsModule {}
