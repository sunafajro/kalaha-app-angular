import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from './interfaces';

export const BASE_URL: string = '//backend.кала-ха.рф';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  booksUrl: string = '/api/books';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<IBook[]>(`${BASE_URL + this.booksUrl}`);
  }

  getBook(id: number) {
    return this.http.get<IBook>(`${BASE_URL + this.booksUrl}/${id}`);
  }
}
