import axios from "axios";

export const addFav = (character) => {
   return async (dispatch) => { 
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      try{   
         const { data } = await axios.post(endpoint, character)
               dispatch({
                  type: 'ADD_FAV',
                  payload: data,
         	   });
      } catch (error){
         console.error(error)
      }
   }   
};

export const removeFav = (id) => {
   
   return async (dispatch) => {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      try{ 
         const { data } = await axios.delete(endpoint)
               dispatch({
                  type: 'REMOVE_FAV',
                  payload: data,
      	      });
      } catch (error){
         console.log(error)
      }
   };   
};

 const filterCards = (gender) => {
	return{
		type: "FILTER",
		payload: gender
	}
}

 const orderCards = (orden) => {
	return{
		type: "ORDER",
		payload: orden
	}
}

export { filterCards, orderCards }