import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MarkdownPipe } from './pipes/markdown/markdown.pipe';

@NgModule({
  declarations: [ToolbarComponent, MarkdownPipe],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
  exports: [ToolbarComponent, MarkdownPipe],
})
export class SharedModule {}
