import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OmdbService } from '../../services/omdb.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  isFavorite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private omdbService: OmdbService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.omdbService.getMovieDetails(id).subscribe((response) => {
        this.movie = response;
        this.checkIfFavorite();
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  checkIfFavorite(): void {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.isFavorite = favorites.some((fav: any) => fav.imdbID === this.movie.imdbID);
  }

  toggleFavorite(): void {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (this.isFavorite) {
      favorites = favorites.filter((fav: any) => fav.imdbID !== this.movie.imdbID);
    } else {
      if (favorites.length < 15) {
        favorites.push({
          imdbID: this.movie.imdbID,
          Title: this.movie.Title,
          Poster: this.movie.Poster,
          Year: this.movie.Year
        });
      } else {
        alert('You can only store up to 15 favorite movies.');
      }
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.isFavorite = !this.isFavorite;
  }
}
