import AsyncStorage from "@react-native-async-storage/async-storage";
import {includes,pull} from "lodash"
import {FAVORITE_STORAGE} from "../utils/constants"


export async function addPokemonFavoriteApi(id){
    try{
        const favorites = await getPokemnosFavoriteApi();
        favorites.push(id);
        console.log("add",favorites);
        await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(favorites));
    }catch(error){
        throw error;
    }
}


export async function getPokemnosFavoriteApi(){
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || []);
    } catch (error) {
        throw error;
    }
}

export async function isPokemonFavoriteApi(id){
    try {
        const response = await getPokemnosFavoriteApi();
        return includes(response,id);
    } catch (error) {
        throw error;
    }
}


export async function removePokemonApi(id){
    try {
        let favorites = await getPokemnosFavoriteApi();
        favorites = pull(favorites,id);
        await AsyncStorage.setItem(FAVORITE_STORAGE,JSON.stringify(favorites));
    } catch (error) {
        throw error;
    }
}