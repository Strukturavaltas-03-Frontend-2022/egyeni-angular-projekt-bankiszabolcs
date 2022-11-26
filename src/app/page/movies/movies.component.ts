import { Component, Input } from '@angular/core';
import { Observable} from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  @Input() pageSize: number = 25

  moviesList$: Observable<Movie[]> = this.movieService.list$

  movieNumber: number = 0

  currentPage: number = 1

  pageCount: number = 1

  constructor(
    private movieService: MovieHandlerService
  ){}

  getPageNumbers(): number[]{
    this.moviesList$.subscribe(movies=>{
      this.movieNumber = movies.length
    })

    this.pageCount = Math.ceil(this.movieNumber/this.pageSize)
    const nums: number[] = []

    for(let i = 0; i<this.pageCount; i++){
      nums[i]= i+1
    }

    return nums
  }

  jumToPage(numb: number):void{


    if(numb > 0 && numb <= this.pageCount ){
    this.currentPage = numb
  }else if(numb>this.pageCount){
    this.currentPage = 1
  }else if(numb === 0){
    this.currentPage = this.pageCount
  }
    console.log(this.currentPage);
}
}
