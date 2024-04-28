import { FullMovie, IMovie } from "../../core/entities/movie.entitie";
import { MovieDBMovie, Result } from "../interfaces/movie-db.responses"

export class MovieMapper {
    static fromMovieDBResultToEntity(result: Result): IMovie {
        return {
            id: result.id,
            title: result.title,
            descripcion: result.overview,
            reseaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`
        }
    }

    static fromMovieDBToEntity( movie: MovieDBMovie ): FullMovie {
        return {
          id: movie.id,
          title: movie.title,
          descripcion: movie.overview,
          reseaseDate: new Date( movie.release_date ),
          rating: movie.vote_average,
          poster: `https://image.tmdb.org/t/p/w500${ movie.poster_path }`,
          backdrop: `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`,
          genres: movie.genres.map( genre => genre.name ),
          duration: movie.runtime,
          budget: movie.budget,
          originalTitle: movie.original_title,
          productionCompanies: movie.production_companies.map( company => company.name ),
        }
      }
}