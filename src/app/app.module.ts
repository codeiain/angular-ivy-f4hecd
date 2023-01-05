import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component'; 
import { M22ResizableComponent } from './resizable/resizable.component';


@NgModule({
  imports: [BrowserModule, FormsModule, DragDropModule],
  declarations: [AppComponent, M22ResizableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
