import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  removeFavorite(id: string): void {
    this.favorites = this.favorites.filter(fav => fav.imdbID !== id);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
