# OverTheMoviezon

This site is about movies. All you need is to type `npm start` into the console.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

Templates I used during the development created by Tailwind UI.

Data come from the 'https://nettuts.hu/jms/bankiszabolcs/cinema'. To make the website faster (considering this is a sample project) 
I left only 100 elements from the data incoming. 

## Documentation

### Home Page
  Navigation:
    -Főoldal: Whenever you click here, it directs you to the main page.
    -Filmek: It navigates you to the movies page.
    -Admin: Non-existing. An area of the project to be developed.
    -Kapcoslat: Non-existing. An area of the project to be developed.   

  Main body:
    -Pictures: These pictures appear randomly from the databases.
    -Button: Navigate you to the movies page.

### Movies Page
  Navigation: 
    - No change
  
  Main body:
    - Sort buttons: Sort the movies according to their title and release year.
    - Input: You can search in the database. (Searching gives you back the movie(s) where the title matches your search phrase)
    - Button: You can add new movie.
    - Movie-Card: You can edit/delete them. If you click them you can check on further information about the movie selected. 
    - Pagination: 20 movies can be found in one page. With the help of the arrows and the numbers you can change the page to get other 20 movie. If you get to the last 20 movie and click right arrow, you get to the first '20' movie page. 
