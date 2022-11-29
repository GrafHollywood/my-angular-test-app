import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [ToolbarComponent],
})
export class SharedModule {}
