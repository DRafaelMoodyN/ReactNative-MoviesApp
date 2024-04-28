import { Text, View, NativeScrollEvent, NativeSyntheticEvent } from "react-native"
import { IMovie } from "../../../core/entities/movie.entitie"
import { FlatList } from "react-native-gesture-handler"
import { MoviePoster } from "."
import { useEffect, useRef } from "react";

interface IProps {
    movies: IMovie[],
    title?: string,
    loadNextPage?:()=> void;
}

const HorizontalCarousel = ({ movies, title, loadNextPage }: IProps) => {

    const isLoading = useRef(false)

    const onScroll = (e:NativeSyntheticEvent<NativeScrollEvent>)=>{

        if( isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize} = e.nativeEvent;

        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
        if(!isEndReached) return ;

        isLoading.current = true

        // Cargar las siguientes 
        loadNextPage && loadNextPage()
    }

    useEffect(()=>{
        isLoading.current = false;

    },[movies])

    return (
        <View style={{ height: title ? 260 : 220 }}>
            {
                title && (
                    <Text style={{
                        fontSize: 30,
                        fontWeight: "300",
                        marginLeft: 10,
                        marginBottom: 10
                    }}>
                        {title}
                    </Text>
                )
            }
            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item,index) => `${item.id}-${index}`}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
            />
 
        </View>
    )
}

export {
    HorizontalCarousel
}