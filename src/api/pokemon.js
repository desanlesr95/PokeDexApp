import { API_HOST, DETAILS_POKEMON } from "../utils/constants";


export async function getPokemonAPI(endpointurl){
    try{
        console.log("endpoitn",endpointurl)
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(endpointurl||url);
        const result = await response.json();
        return result;
    }catch(error){
        throw error;
    }
}

export async function getPokemonDetailsByUrlApi(url){
    console.log(url);
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result;
    }catch(error){
        throw error;
    }
}


export async function getPokemonDetailsByIdApi(id){
    
    try{
        const response = await fetch(`${DETAILS_POKEMON}${id}`);
        const result = await response.json();
        return result;
    }catch(error){
        throw error;
    }
}




