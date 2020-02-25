import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ITerms } from "./interfaces";

export const BASE_URL: string = "//api.кала-ха.рф";

@Injectable({
  providedIn: "root"
})
export class TermService {
  termsUrl: string = "/api/terms";
  fiteredTermsUrl: string = "/api/term";

  constructor(private http: HttpClient) {}

  getTerms(limit?: number, offset?: number) {
    const targetUrl: string[] = [BASE_URL + this.termsUrl];
    if (typeof limit === "number" && limit > 0) {
      targetUrl.push(String(limit));
      if (typeof offset === "number" && offset > 0) {
        targetUrl.push(String(offset));
      }
    }

    return this.http.get<ITerms>(targetUrl.join("/"));
  }

  getTermsFiltered(term: string, limit?: number, offset?: number) {
    const targetUrl: string[] = [BASE_URL + this.fiteredTermsUrl];
    targetUrl.push(term);
    if (typeof limit === "number" && limit > 0) {
      targetUrl.push(String(limit));
      if (typeof offset === "number" && offset > 0) {
        targetUrl.push(String(offset));
      }
    }

    return this.http.get<ITerms>(targetUrl.join("/"));
  }
}
