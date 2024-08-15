import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apiKey: string = '';
  private baseUrl: string = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  searchMovies(query: string): Observable<any> {
    const url = `${this.baseUrl}?s=${query}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getMovieDetails(id: string): Observable<any> {
    const url = `${this.baseUrl}?i=${id}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
