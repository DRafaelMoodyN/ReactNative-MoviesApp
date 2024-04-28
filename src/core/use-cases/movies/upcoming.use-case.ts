import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { IMovie } from "../../entities/movie.entitie";

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<IMovie[]> => {
    try {
        const upcoming = await fetcher.get<MovieDBMoviesResponse>('/upcoming');
        return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - UpcomingUseCase');
    }
}