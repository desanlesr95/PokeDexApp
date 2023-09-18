import React from 'react';
import { StyleSheet,Image, View, Text , Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import getColorByPokemonType from '../utils/getColorByPokemonType';

const PokemonCard = ({pokemon}) => {
  const navigation = useNavigation();
  const goToPokemon = () =>{
    navigation.navigate("Pokemon",{pokemon:pokemon});
    
  }

  const styleCard = {backgroundColor:getColorByPokemonType(pokemon.type),...styles.card};
  
  return (
        <View style={styles.container}>
            <Pressable onPress={goToPokemon}>
                <View style={styles.card}>
                    <View style={styles.spacing}>
                        <View style={styleCard}>
                            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                            <Text style={styles.name}>{pokemon.name}</Text>
                            <Image source={{ uri: pokemon.image }} style={styles.image} />
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        flex: 1,
        height: 130,
        borderRadius: 10
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgCard: {
        backgroundColor: "grey"
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width:80,
        height: 80
    },
    name: {
        color: "#fff",
        paddingTop: 10,
        fontSize: 15,
        fontWeight: "bold",
    },
    number: {
        position: "absolute",
        top: 10,
        right: 10,
        fontSize: 11,
        color: "#fff"
    }
});

export default PokemonCard;
