import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "../../navigation/Navigation"
import { useMovie } from "../../hooks"
import { MovieHeader } from "../../components/movie/MovieHeader"
import { MovieDetails } from "../../components/movie/MovieDetails"
import { ScrollView } from "react-native-gesture-handler"
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader"

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { }

const DetailScreen = ({ route }: Props) => {
    const { moviId } = route.params;
    const { isLoading, movie, cast=[]} = useMovie(moviId)

    if (isLoading) {
        return <FullScreenLoader/>
    }
    
    return (
        <ScrollView>
            <MovieHeader 
            title={movie!.title} 
            poster={movie!.poster} 
            originalTitle={movie!.originalTitle} 
            />
            <MovieDetails movie={movie!} cast={cast}/>
        </ScrollView>
    )
}

export {
    DetailScreen
}