import type { Movie_I } from "../types/Movie";

  const fakeMovies: Movie_I[] = [
    {
      Title: 'Barbie',
      Year: '2023',
      imdbID: 'tt00861911',
      Poster: 'https://deadline.com/wp-content/uploads/2023/04/barbie-BARBIE_VERT_TSR_W_TALENT_2764x4096_DOM_rgb.jpg?w=800',
      Genre: 'Action, Adventure, Comedy',
    },
    {
      Title: 'Shrek',
      Year: '2001',
      imdbID: 'tt0126029',
      Poster: 'https://www.themoviedb.org/t/p/original/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg',
      Genre: 'Animation, Adventure, Comedy',
    },
    {
      Title: 'Shrek 2',
      Year: '2004',
      imdbID: 'tt0298148',
      Poster: 'https://www.originalfilmart.com/cdn/shop/products/shrek_2_2004_original_film_art_5000x.jpg?v=1551894581',
      Genre: 'Animation, Adventure, Comedy',
    },
    {
      Title: 'Shrek the Third',
      Year: '2007',
      imdbID: 'tt0413267',
      Poster: 'https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_.jpg',
      Genre: 'Animation, Adventure, Comedy',
    },
    {
      Title: 'Shrek the Fianl Chapter',
      Year: '2010',
      imdbID: 'tt0892791',
      Poster: 'https://static.tvtropes.org/pmwiki/pub/images/shrek_the_final_chapter.png',
      Genre: 'Animation, Adventure, Comedy',
    },
    {
      Title: 'Star Wars',
      Year: '1977',
      imdbID: 'tt0076759',
      Poster: 'https://static.wikia.nocookie.net/starwars/images/0/06/Star_Wars_Style_A_poster_1977.jpg/revision/latest?cb=20100708051712',
      Genre: 'Action, Adventure, Fantasy',
    },
    {
      Title: 'Star Wars: The Empire Strikes Back',
      Year: '1980',
      imdbID: 'tt0080684',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      Genre: 'Action, Adventure, Fantasy',
    },
    {
      Title: 'Star Wars: Return of the Jedi',
      Year: '1983',
      imdbID: 'tt0086190',
      Poster: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
      Genre: 'Action, Adventure, Fantasy',
    },
  
  ];
  


export const searchMovies = (
    searchTerm: string,
    searchGenre?: string,
    searchYear?: string
  ): Promise<Movie_I[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (searchTerm.trim() === '' && !searchGenre && !searchYear) {
          resolve(fakeMovies);
        } else {
          const filteredMovies = fakeMovies.filter((movie) => {
            const titleMatch = movie.Title.toLowerCase().includes(searchTerm.toLowerCase());
            const genreMatch = !searchGenre || movie.Genre.toLowerCase().includes(searchGenre.toLowerCase());
            const yearMatch = !searchYear || movie.Year === searchYear;
            return titleMatch && genreMatch && yearMatch;
          });
          resolve(filteredMovies);
        }
      }, 1000); 
    });
  };
  