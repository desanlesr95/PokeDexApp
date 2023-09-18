import React,{useState,useEffect} from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import {addPokemonFavoriteApi,isPokemonFavoriteApi,removePokemonApi} from "../../api/favorite"

const Favorite = ({id}) => {
  const [isFavorite,setIsFavorite] = useState(undefined);
  const [reloadCheck,setReloadCheck] = useState(false);
  console.log(isFavorite)
  useEffect( () => {
		( async () => {
			try {
				const response = await isPokemonFavoriteApi( id );
				setIsFavorite( response )
			} catch (error) {
				setIsFavorite( false )
			}
		})();
	}, [ id,reloadCheck] )




const onReloadCheck = () =>{
  setReloadCheck((prev) => !prev);
}



  const addFavorite = async () =>{
    await addPokemonFavoriteApi(id);
    onReloadCheck();
  }

  const removeFavorite = async () =>{
    await removePokemonApi(id);
    onReloadCheck();
}
  
  return (
    <Icon   name='heart' 
            color="#fff" 
            size={20}
            solid={isFavorite}
            onPress={isFavorite ? removeFavorite : addFavorite}
            style={{marginRight:5}}/>
  );
}

export default Favorite;
