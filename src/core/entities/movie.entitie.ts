export interface IMovie {
    id: number,
    title: string,
    descripcion: string,
    reseaseDate: Date,
    rating: number,
    poster: string,
    backdrop: string
}

export interface FullMovie extends IMovie {
    genres:string[];
    duration:number;
    budget:number;
    originalTitle:string;
    productionCompanies:string[]
}