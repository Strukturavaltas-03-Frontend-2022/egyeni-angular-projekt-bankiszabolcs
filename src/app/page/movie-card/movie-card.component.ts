import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() movie: Movie = new Movie()

  @Output() edit = new EventEmitter()
  @Output() delete = new EventEmitter<Movie>()

  onEdit():void{
    this.edit.emit(this.movie)
  }

  onDelete(movie: Movie):void{
    this.delete.emit(movie)
  }

}
