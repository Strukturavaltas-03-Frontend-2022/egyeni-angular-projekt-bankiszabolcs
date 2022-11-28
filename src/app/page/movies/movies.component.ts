import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  @Input() pageSize: number = 20

  moviesList$: Observable<Movie[]> = this.movieService.list$

  movieNumber: number = 0

  currentPage: number = 1

  pageCount: number = 1

  sortOrder: string = 'nameAz'

  searchPhrase: string = ''

  isEditid: boolean = this.movieService.isEditid

  constructor(
    private movieService: MovieHandlerService,
    private router: Router
  ){}

    getStart():number{
     return (this.currentPage-1)*this.pageSize
    }

    getEnd():number{
      return this.currentPage*this.pageSize
    }

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
}

onDelete(movie: Movie):void{
  this.movieService.delete(movie)
}

onEdit(movie: Movie = new Movie()):void{
  this.movieService.isEditid=true
  this.router.navigate(['/movies/edit/', movie.id])

}

sort(sort:string):void{
  this.sortOrder = sort
}

}
