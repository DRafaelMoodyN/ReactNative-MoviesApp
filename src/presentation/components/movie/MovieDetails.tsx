import { Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { FullMovie } from '../../../core/entities/movie.entitie';
import { Cast } from '../../../core/entities/cast.entity';
import { CastActor } from '../cast/CastActor';
import { Formatter } from '../../../config/helpers/Formatter';

interface Props {
  movie: FullMovie;
  cast: Cast[]
}

export const MovieDetails = ({ movie, cast }: Props) => {
  return (
    <View>

        <View style={{ marginHorizontal: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text>{movie.rating}</Text>

            <Text style={{ marginLeft: 5 }}>- {movie.genres.join(', ')}</Text>
          </View>

          <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
            Historia
          </Text>
          <Text style={{ fontSize: 16 }}>{movie.descripcion}</Text>

          <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
            Presupuesto
          </Text>

          <Text style={{ fontSize: 18 }}>
            {Formatter.currency(movie.budget)}
          </Text>
        </View>

        {/* Casting */}
        
        <View style={{ marginTop: 10, marginBottom: 50 }}>
          <Text style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20
          }}>
            Actores
          </Text>

          <FlatList
            data={cast}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CastActor actor={item} />}
          />
        </View>
    </View>
  );
};