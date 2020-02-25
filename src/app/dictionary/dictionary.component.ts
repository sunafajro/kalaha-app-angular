import { Component } from '@angular/core';
import { ITerm, ITerms } from "../interfaces";
import { TermService } from "../term.service";

const DEFAULT_LIMIT : number = 5;
const DEFAULT_OFFSET : number = 0;

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
})
export class DictionaryComponent {
    terms: ITerm[];
    count: number|null = null;
    searchTerm: string;
    offset: number = DEFAULT_OFFSET;
    limit: number = DEFAULT_LIMIT;

    constructor(private termService: TermService) {}

    onInputTerm(str: string) {
        this.searchTerm = str;
      }
    
      goToPreviousPage() {
        this.offset = this.offset - this.limit;
        if (this.offset < 0) {
          this.offset = DEFAULT_OFFSET;
        }
        this.searchTerms();
      }
    
      goToNextPage() {
        this.offset = this.offset + this.limit;
        if (this.offset > this.count) {
          this.offset = this.offset - this.limit;
        }
        this.searchTerms();
      }
    
      onSearchSubmit() {
        this.limit = DEFAULT_LIMIT;
        this.offset = DEFAULT_OFFSET;
        this.searchTerms();
      }
    
      searchTerms() {
        if (this.searchTerm) {
          this.termService
            .getTermsFiltered(this.searchTerm, this.limit, this.offset)
            .subscribe((data: ITerms) => {
              this.terms = data.terms;
              this.count = data.total;
            });
        } else {
            this.terms = [];
            this.count = null;
        }
      }
}
