import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { IMovie } from "../../entities/movie.entitie";

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<IMovie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>("/now_playing")
        const data = nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity)
        return data
    } catch (error) {
        throw new Error(` Error fetcher movies ${error}`)
    }
}