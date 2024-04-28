import { Text, View } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { ScrollView } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { PosterCarousel, HorizontalCarousel } from "../../components/movies"

const HomeScreen = () => {
    const { top } = useSafeAreaInsets()
    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies()
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
                <PosterCarousel movies={nowPlaying} />
                <HorizontalCarousel movies={popular} title="Populares" loadNextPage={popularNextPage} />
                <HorizontalCarousel movies={topRated} title="Mejor Calificaciones" />
                <HorizontalCarousel movies={upcoming} title="Proximamente" />
            </View>
        </ScrollView>
    )
}

export {
    HomeScreen
}