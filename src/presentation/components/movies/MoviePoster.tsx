import { Image, Pressable, StyleSheet, View } from "react-native"
import { IMovie } from "../../../core/entities/movie.entitie"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParams } from "../../navigation/Navigation"

interface IProps {
    movie: IMovie,
    height?: number,
    width?: number,
}

const MoviePoster = ({ movie, height = 420, width = 300 }: IProps) => {
    const navigate = useNavigation<NavigationProp<RootStackParams>>()

    return (
        <Pressable
            style={({ pressed }) => (
                {
                    width,
                    height,
                    marginHorizontal: 10,
                    paddingBottom: 20,
                    paddingHorizontal: 10,
                    opacity: pressed ? 0.9 : 1
                })
            }
            onPress={() => navigate.navigate("Detail", { moviId: movie.id })}>
            <View style={styles.container}>
                <Image style={styles.imagen} source={{ uri: movie.poster }} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    imagen: {
        flex: 1,
        borderRadius: 18
    },
    container: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9
    }
})

export {
    MoviePoster
}