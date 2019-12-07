import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../interfaces';
import { IChapter } from '../interfaces';
import { prepareFileUrl } from '../helpers';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  id: number;
  book: IBook;
  chapter: IChapter;
  contentUrl: string = '/api/books/:id/file/:name/:type';
  selectedChapter: number = 1;

  constructor(
    private route: ActivatedRoute,
    private booksService: BookService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.booksService.getBook(this.id).subscribe((data: IBook) => {
        this.book = data;
        const chapter = this.book.chapters.find(
          item => +item.id === this.selectedChapter
        );
        if (chapter) {
          this.chapter = chapter;
        }
      });
    });
  }

  changeChapter(id: number) {
    this.selectedChapter = id;
    this.chapter = this.book.chapters.filter(chapter => chapter.id === id)[0];
  }

  prepareUrl(book: IBook, chapter: IChapter) {
    return prepareFileUrl({
      id: book.id,
      file: chapter,
      baseUrl: this.contentUrl,
    });
  }
}
