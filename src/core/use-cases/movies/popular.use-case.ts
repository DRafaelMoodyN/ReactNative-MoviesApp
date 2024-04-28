import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMoviesResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { IMovie } from "../../entities/movie.entitie";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

interface Options {
    page?:number,
    limit?:number
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter,options?:Options ): Promise<IMovie[]> => {
    try {
        const popular = await fetcher.get<MovieDBMoviesResponse>('/popular',{
            params:{
                page:options?.page ?? 1
            }
        });
        return popular.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies - PopularUseCase');
    }
}