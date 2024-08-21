import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apiKey: string = environment.apiKey;
  private baseUrl: string = 'https://www.omdbapi.com/';

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
