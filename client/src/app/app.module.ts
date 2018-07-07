import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ComicUploadComponent } from './comic-upload/comic-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ComicUploadComponent
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
