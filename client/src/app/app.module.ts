import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ComicUploadComponent } from './comic-upload/comic-upload.component';
import { ControlTagsComponent } from './control-tags/control-tags.component';
import { ControlUploadComponent } from './control-upload/control-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ComicUploadComponent,
    ControlTagsComponent,
    ControlUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
