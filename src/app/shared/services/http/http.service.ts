import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Output } from "../../models/output";

@Injectable({
              providedIn: 'root',
            })
export class HttpService {

  private readonly baseUrl = `https://swapi.dev/api/planets/`

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Gets all planets form DB
   * @param page
   */
  get(page?: number): Observable<Output> {
    if (!page) {
      page = 1
    }
    return this.httpClient.get<Output>(this.baseUrl, {
      params: {
        page
      }
    });
  }

  /**
   * Get request by url
   */
  getByUrl(url: string) {
    return this.httpClient.get<any>(url);
  }
}
