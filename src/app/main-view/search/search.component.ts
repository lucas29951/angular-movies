import { Component } from '@angular/core';
import { OmdbService } from '../../services/omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  movies: any[] = [];

  constructor(private omdbService: OmdbService) { }

  search(): void {
    if (this.query.trim()) {
      this.omdbService.searchMovies(this.query).subscribe((response) => {
        this.movies = response.Search;
      });
    }
  }
}
