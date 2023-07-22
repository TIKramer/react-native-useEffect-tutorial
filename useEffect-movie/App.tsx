import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { searchMovies } from './src/api/mockApi';
import type { Movie_I } from './src/types/Movie';
import Movie from './src/components/Movie';
import SearchBar from './src/components/SearchBar';

const MovieSearchApp: React.FC = () => {
  const [searchTitle, setSearchTerm] = useState<string>('')
  const [searchGenre, setSearchGenre] = useState<string>('')
  const [searchYear, setSearchYear] = useState<string>('')
  const [sortBy, setSortBy] = useState<'title' | 'year'>('title')
  const [movies, setMovies] = useState<Movie_I[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const handleSearch = async (): Promise<void> => {
      setLoading(true)
      try {
        const filteredMovies = await searchMovies(searchTitle, searchGenre, searchYear)
        setMovies(filteredMovies)
      } catch (error) {
        console.error('Error occurred during movie search:', error)
      } finally {
        setLoading(false)
      }
    }
    void handleSearch()
  }, [ searchGenre, searchYear])
  
  const handleSortChange = (sortBy: 'title' | 'year'): void => {
    const sortedMovies = sortMovies(movies, sortBy)
    setMovies(sortedMovies)
    setSortBy(sortBy)
  }

  const sortMovies = (movies: Movie_I[], sortBy: 'title' | 'year'): Movie_I[] => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (sortBy === 'title') {
        return a.Title.localeCompare(b.Title)
      }
      else if (sortBy === 'year') {
        return parseInt(b.Year, 10) - parseInt(a.Year, 10)
      } else {
        return 0
      }
    })
    return sortedMovies
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Search</Text>
      <SearchBar
        placeholder="Enter movie title..."
        value={searchTitle}
        onSearch={(text) => setSearchTerm(text)}
      />
      <SearchBar
        placeholder="Enter genre..."
        value={searchGenre}
        onSearch={(text) => setSearchGenre(text)}
      />
      <SearchBar
        placeholder="Enter year..."
        value={searchYear}
        onSearch={(text) => { setSearchYear(text) }}
        keyboardType="numeric"
      />

      <View style={styles.sortByContainer}>
        <Text style={styles.sortByText}>Sort By:</Text>
        <Text
          style={[styles.sortByOption, sortBy === 'title' && styles.activeSort]}
          onPress={() => handleSortChange('title')}
        >
          Title
        </Text>

        <Text
          style={[styles.sortByOption, sortBy === 'year' && styles.activeSort]}
          onPress={() => handleSortChange('year')}
        >
          Year
        </Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.imdbID}
          renderItem={({ item }) => <Movie movie={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  sortByContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sortByText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sortByOption: {
    fontSize: 16,
    color: '#333',
    padding: 8,
  },
  activeSort: {
    color: '#007bff',
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  movieCard: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  movieInfo: {
    fontSize: 16,
  },
});

export default MovieSearchApp;
