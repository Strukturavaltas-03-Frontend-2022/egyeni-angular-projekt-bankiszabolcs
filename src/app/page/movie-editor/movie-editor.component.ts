import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieHandlerService } from 'src/app/services/movie-handler.service';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.scss']
})
export class MovieEditorComponent {

  movieService: MovieHandlerService = inject(MovieHandlerService)

  activatedRoute: ActivatedRoute = inject(ActivatedRoute)

  actualMovie$: Observable<Movie> = this.movieService.selectedMovie$

  constructor(){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(
      params => this.movieService.get(params['id']))

    /*   user$: Observable<User> = this.actR.params.pipe(
    switchMap( params => this.userServ.get(params['id']))
  ) */
  }


}
