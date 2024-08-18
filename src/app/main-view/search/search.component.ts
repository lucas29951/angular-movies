import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../../services/omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string = '';
  movies: any[] = [];

  constructor(private omdbService: OmdbService) { }

  ngOnInit(): void {
      
  }
  
  search(): void {
    if (this.query.trim()) {
      this.omdbService.searchMovies(this.query).subscribe((response) => {
        this.movies = response.Search;
      });
    }
  }
}
