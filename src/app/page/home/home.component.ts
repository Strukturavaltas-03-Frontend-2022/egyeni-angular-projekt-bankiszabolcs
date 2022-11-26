import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private movieService: MovieHandlerService
  ){}

  posterList$: Observable<string[]> = this.movieService.list$.pipe(
    map(movies=> {
  return this.getNumberOfRandomElementsFromArray(movies.map(movies=> movies.poster),7)

    }
      ))

    getNumberOfRandomElementsFromArray(arr:string[], n:number):string[]{
      return arr.sort(() => Math.random() - Math.random()).slice(0, n)
    }
}
