import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDBMovie } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entitie";

export const getMovieByIdUseCase = async(fetcher:HttpAdapter, movieId:number):Promise<FullMovie> =>{

    try{
        const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`)
        const fullMovie = MovieMapper.fromMovieDBToEntity(movie)
        return fullMovie;
    } catch(error){
        throw new Error (`Error get id movie ${movieId}`)
    }
}