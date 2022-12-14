import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { ConfigService } from 'src/app/services/config.service';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.scss']
})
export class MovieEditorComponent {

  movieService: MovieHandlerService = inject(MovieHandlerService)

  activatedRoute: ActivatedRoute = inject(ActivatedRoute)

  router: Router = inject(Router)

  actualMovie$: Observable<Movie> = this.movieService.selectedMovie$

  isEditid: boolean = this.movieService.isEditid


  constructor(){  }

  ngOnInit():void{
    this.activatedRoute.params.subscribe(
      params => this.movieService.get(params['id']))
  }

  editToggle(movie: Movie):void{
    if(this.isEditid){
      if(movie.id===0){
        this.movieService.create(movie)
      }else{
        this.movieService.update(movie)
      }

     // this.router.navigate(['/movies'])
    }

    this.isEditid= !this.isEditid
  }

    editOff():void{
      this.movieService.isEditid = false
    }

  onDelete(movie: Movie):void{
    this.movieService.delete(movie)
    this.router.navigate(['/movies'])
  }

}
