import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import FavoriteScreen from '../screens/FavoriteScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Favorite' component={FavoriteScreen} options={ {
                    title: "Favoritos"
                } } />
        <Stack.Screen name='Pokemon' component={PokemonScreen} options={ {
                    title: "",
                    headerShown: true,
                    headerTransparent: true,
                    headerShadowVisible: false
                } } />
    </Stack.Navigator>
  );
}

export default FavoriteNavigation;
