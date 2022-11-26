import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from '../model/movie';
import { BehaviorSubject, Observable, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieHandlerService {

  apiUrl: string = 'https://nettuts.hu/jms/bankiszabolcs/cinema'

  list$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([])

  selectedMovie$: BehaviorSubject<Movie> = new BehaviorSubject<Movie>(new Movie())

  constructor(
    private http: HttpClient
  ) {
    if(sessionStorage.getItem('movieList')){
      this.list$.next(JSON.parse(sessionStorage['movieList']))
    }else{
      this.getAll()
    }
   }

    getAll():void{
      this.http.get<Movie[]>(this.apiUrl).subscribe({
        next: movies => {
          movies = movies.slice(0,100)
         sessionStorage.setItem('movieList', JSON.stringify(movies))
         this.list$.next(movies)
        }
        }
      )
    }

    get(id:number):void{
      this.http.get<Movie>(`${this.apiUrl}/${id}`).subscribe({
        next: movie => this.selectedMovie$.next(movie)
      }
      )
    }

}
