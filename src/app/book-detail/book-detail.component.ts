import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { IBook, IChapter, IFile } from '../interfaces';
import { prepareFileUrl } from '../helpers';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  bookId: number = 1;
  chapterId: number = 1;
  book: IBook;
  chapter: IChapter;
  contentUrl: string = '/api/books/:id/file/:name/:type';

  constructor(
    private route: ActivatedRoute,
    private booksService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookId = +params.get('id');
      this.chapterId = +params.get('chapter');
      this.booksService.getBook(this.bookId).subscribe((data: IBook) => {
        this.book = data;
        const chapter = this.book.chapters.find(
          item => +item.id === this.chapterId
        );
        if (chapter) {
          this.chapter = chapter;
        }
      });
    });
  }

  prepareUrl(file: IFile) {
    return prepareFileUrl({
      id: this.bookId,
      file,
      baseUrl: this.contentUrl,
    });
  }
}
