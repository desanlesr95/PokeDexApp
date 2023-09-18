import React, { useCallback, useEffect, useState } from 'react';
import {  Text } from 'react-native';
import { getPokemnosFavoriteApi,isPokemonFavoriteApi } from '../api/favorite';
import useAuth from "../hooks/useAuth"
import PokemonList from '../components/PokemonList';
import { getPokemonDetailsByIdApi } from '../api/pokemon';
import { useFocusEffect } from '@react-navigation/native';
import NoLogged from '../components/Pokemon/NoLogged';
const FavoriteScreen = () => {
  const [pokemons,setPokemons] = useState([]);
  const {auth} = useAuth();
  

  useFocusEffect( 
    useCallback( () => {
        detailsPokemons();
    }, [])
  );

  const detailsPokemons = async()=>{
    try {
      const favoritePokemons = await getPokemnosFavoriteApi();
      const pokemonDetailsArray = await Promise.all(
        favoritePokemons.map(async (pokemonId) => {
          const pokemonDetails = await getPokemonDetailsByIdApi(pokemonId);
          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            types: pokemonDetails.types.map((item) => item.type),
            order: pokemonDetails.order,
            image: pokemonDetails.sprites.other["official-artwork"].front_default,
            stats: pokemonDetails.stats,
          };
        })
      );
      setPokemons(pokemonDetailsArray);
    } catch (error) {
      console.error("Error al cargar los Pokémon favoritos:", error);
    } 
  }
	
  return (
    !auth ? <NoLogged/> : 
    <PokemonList
      pokemons = { pokemons }
    />
  );
}

export default FavoriteScreen;
