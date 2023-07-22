// api/fakeApi.ts

export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Poster: string;
    Genre: string; // Adding the genre property
  }
  
  const fakeMovies: Movie[] = [
    {
      Title: 'Shrek',
      Year: '2001',
      imdbID: 'tt0126029',
      Poster: 'https://example.com/shrek-poster.jpg',
      Genre: 'Animation, Adventure, Comedy',
    },
    {
      Title: 'Shrek 2',
      Year: '2004',
      imdbID: 'tt0298148',
      Poster: 'https://example.com/shrek-2-poster.jpg',
      Genre: 'Animation, Adventure, Comedy',
    },
    {
      Title: 'Shrek the Third',
      Year: '2007',
      imdbID: 'tt0413267',
      Poster: 'https://example.com/shrek-the-third-poster.jpg',
      Genre: 'Animation, Adventure, Comedy',
    },
    {
      Title: 'Shrek Forever After',
      Year: '2010',
      imdbID: 'tt0892791',
      Poster: 'https://example.com/shrek-forever-after-poster.jpg',
      Genre: 'Animation, Adventure, Comedy',
    },
    {
      Title: 'Star Wars',
      Year: '1977',
      imdbID: 'tt0076759',
      Poster: 'https://example.com/star-wars-poster.jpg',
      Genre: 'Action, Adventure, Fantasy',
    },
    {
      Title: 'Star Wars: The Empire Strikes Back',
      Year: '1980',
      imdbID: 'tt0080684',
      Poster: 'https://example.com/star-wars-empire-poster.jpg',
      Genre: 'Action, Adventure, Fantasy',
    },
    {
      Title: 'Star Wars: Return of the Jedi',
      Year: '1983',
      imdbID: 'tt0086190',
      Poster: 'https://example.com/star-wars-return-poster.jpg',
      Genre: 'Action, Adventure, Fantasy',
    },
  ];
  


export const searchMovies = (
    searchTerm: string,
    searchGenre?: string,
    searchYear?: string
  ): Promise<Movie[]> => {
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
  