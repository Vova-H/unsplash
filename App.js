import ImagesList from "./components/screens/ImagesList";
import ImageDetail from "./components/screens/ImageDetail";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="ImagesList">
          <Stack.Screen name="ImagesList" component={ImagesList}/>
          <Stack.Screen name="ImageDetail" component={ImageDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}


