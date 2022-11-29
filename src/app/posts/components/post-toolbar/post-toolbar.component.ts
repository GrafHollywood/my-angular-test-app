import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-toolbar',
  templateUrl: './post-toolbar.component.html',
  styleUrls: ['./post-toolbar.component.scss'],
})
export class PostToolbarComponent {
  @Output() add = new EventEmitter<void>();
}
