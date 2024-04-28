import { Text, View } from "react-native"
import { IMovie } from "../../../core/entities/movie.entitie"
import { ScrollView } from "react-native-gesture-handler"
import { MoviePoster } from "./MoviePoster"

interface IProps {
    movies: IMovie[],
    height?: number
}

const PosterCarousel = ({ height = 440, movies }: IProps) => {

    return (
        <View style={{ height }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    movies.map((x, i) => (
                        <MoviePoster key={i} movie={x} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export {
    PosterCarousel
}