import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../interfaces';
import { prepareFileUrl } from '../helpers';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: IBook[];
  contentUrl: string = '/api/books/:id/file/:name/:type';

  constructor(private booksService: BookService) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((data: IBook[]) => (this.books = data));
  }

  prepareUrl(book: IBook) {
    return prepareFileUrl({
      id: book.id,
      file: book.cover,
      baseUrl: this.contentUrl,
    });
  }
}
