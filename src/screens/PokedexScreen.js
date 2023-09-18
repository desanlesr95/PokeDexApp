import React,{useEffect,useState} from 'react';
import { SafeAreaView } from 'react-native';
import { getPokemonAPI, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

const PokedexScreen = () => {
  const [pokemons,setPokemons] = useState([]);
  const [nextUrl,setNextUrl] = useState(null);

  
  useEffect(()=>{
    (async()=>{
      loadPokemons();
    })()
  },[]);



  const loadPokemons = async () =>{
    try{
      const response = await getPokemonAPI(nextUrl);
      setNextUrl(response.next);
      const pokemonsArray = await Promise.all(
        response.results.map(async (pokemon) => {
          const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            types:  pokemonDetails.types.map((item)=>{
              //console.log(item.type.name);
              return item.type;
            }),
            order: pokemonDetails.order,
            image:
              pokemonDetails.sprites.other["official-artwork"].front_default,
            stats: pokemonDetails.stats,
          };
        })
      );
      //console.log("->",pokemonsArray.length);
      setPokemons([...pokemons,...pokemonsArray]);
    }catch(error){
      //console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
    </SafeAreaView>
  );
}

export default PokedexScreen;
