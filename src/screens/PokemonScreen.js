import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Favorite from '../components/Pokemon/Favorite';
import useAuth from '../hooks/useAuth';


const PokemonScreen = ({route,navigation}) => {
  console.log(route.params.pokemon)
  const pokemon = route.params.pokemon;
  const {auth} = useAuth();
  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => auth ? <Favorite id={pokemon?.id}/> : undefined,
      headerLeft: () => <Icon 
                            name='arrow-left' 
                            color="#fff" 
                            size={20} 
                            style={{marginLeft:2}} 
                            onPress={()=> navigation.goBack()}
                        /> 
    });
  },[navigation,route.params,pokemon])
  return (
    <ScrollView>
      <Header name={pokemon.name} order={pokemon.order} image={pokemon.image} type={pokemon.type} />
      <Type types={pokemon.types}/>
      <Stats stats={pokemon.stats}/>
    </ScrollView>
  );
}

export default PokemonScreen;
