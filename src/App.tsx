import { NavigationContainer } from "@react-navigation/native"
import { NavigationStack } from "./presentation/navigation/Navigation"
import 'react-native-gesture-handler';

export const App = () => {

  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  )
}
