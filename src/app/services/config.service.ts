import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  genre: string[] = [
    'Comedy',
    'Adventure',
    'Documentary',
    'Crime',
    'Drama',
    'Thriller',
    'Fantasy',
    'War',
    'Horror',
    'Film-Noir',
    'Children',
    'Romance',
    'Action',
    'Animation',
    'IMAX',
    'Fantasy',
    'Mystery',
    'Sci-Fi',

  ]

  constructor() { }
}
