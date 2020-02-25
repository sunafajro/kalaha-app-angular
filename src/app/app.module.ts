import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { BookService } from './book.service';
import { TermService } from './term.service';
import { AddLeadingZeroes } from './add-leading-zeroes.pipe';
import { AudioPlayerComponent } from './audio-player/audio-player.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    AudioPlayerComponent,
    AddLeadingZeroes,
    DictionaryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BookService, TermService],
  bootstrap: [AppComponent],
})
export class AppModule {}
