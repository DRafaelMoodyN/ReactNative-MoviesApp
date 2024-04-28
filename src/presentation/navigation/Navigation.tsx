import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailScreen } from '../screens/details/DetailScreen';

export type RootStackParams = {
    Home: undefined,
    Detail: { moviId: number }
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigationStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
}