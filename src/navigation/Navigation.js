import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import AccountScreen from '../screens/AccountScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import PokedexNavigation from './PokedexNavigation';
import FavoriteNavigation from './FavoriteNavigation';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName='Pokedex navigation'>
      <Tab.Screen name='Favorite navigation' component={FavoriteNavigation} options={{
        headerShown:false,
        tabBarIcon: ({color,size}) =>(<Icon name="heart" color={color} size={size}/>)
      }}/>

      <Tab.Screen name='Pokedex navigation' component={PokedexNavigation} options={{
        tabBarLabel:"",
        tabBarIcon: ({color,size}) =>renderPokeBall(),
        headerShown:false
      }}/>

      <Tab.Screen name='Account' component={AccountScreen}  options={{
        tabBarLabel:"Mi cuenta",
        headerTitle: "Mi cuenta",
        tabBarIcon: ({color,size}) =>(<Icon name="user" color={color} size={size}/>)
      }}/>
      
    </Tab.Navigator>
  );
}




function renderPokeBall(){
    return (
        <Image 
            source={require('../assets/pokeball.png')}
            style={{width:75,height:75, top:-15}}
        />
    )
}



export default Navigation;
