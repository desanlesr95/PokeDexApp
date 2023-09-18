import React from 'react';
import { StyleSheet,ActivityIndicator , FlatList, Platform} from 'react-native';
import PokemonCard from './PokemonCard';

const PokemonList = ({pokemons,loadPokemons,isNext}) => {
  
  const loadMore = () => {
    loadPokemons();
  }

  return (  
    <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon)=>String(pokemon.id)}
        renderItem = { ({item})=>(<PokemonCard pokemon={item}/>)}
        contentContainerStyle={styles.flatListContainer}
        onEndReached={isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext && (
            <ActivityIndicator size='large' style={styles.spinner}/>
          )
          
        }
    />
  );
}


const styles = StyleSheet.create({
    flatListContainer: {
        padding: 15,
        marginTop:Platform.OS == "android" ? 10: 0
    },
    spinner:{
      marginTop:20,
      marginBottom:Platform.OS == "android" ? 80:60
    }
})


export default PokemonList;
