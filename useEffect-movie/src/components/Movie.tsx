import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import type { Movie_I } from '../types/Movie';

const Movie: React.FC<{ movie: Movie_I }> = ({ movie }) => {
  return (
    <View style={styles.movieCard}>
      <Image source={{ uri: movie.Poster }} style={styles.posterImage} resizeMode="cover" />
      <Text style={styles.movieTitle}>{movie.Title}</Text>
      <Text style={styles.movieInfo}>
        Year: {movie.Year} | Genre: {movie.Genre}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  movieCard: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2
  },
  posterImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8
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

export default Movie
