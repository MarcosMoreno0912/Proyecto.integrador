

const initialState = {
	  myFavourites: [],
	  allCharactersFav: []
}

const Reducer = (state= initialState, action) => {
	switch (action.type){
	  case "ADD_FAV":
	    return{
	    	...state,
	    	myFavourites: [...state.allCharactersFav, action.payload],
	    	allCharactersFav: [...state.allCharactersFav, action.payload],
	    }
	  case "REMOVE_FAV":
	  	return{
	  		...state,
	  		myFavourites: state.myFavourites.filter((fav) => fav.id !== Number(action.payload))
	  	}
	  case "FILTER":	  	
	  	return{
	  		...state,
	  		myFavourites: state.allCharactersFav.filter((char) => char.gender === action.payload)
	  	}
	  case "ORDER":
	  	const allCharactersFavCopy = [...state.allCharactersFav]
	  	return{
	  		...state,
	  		myFavourites: 
	  		action.payload === "A"
	  		? allCharactersFavCopy.sort((a, b) => a.id - b.id)
	  		: allCharactersFavCopy.sort((a, b) => b.id - a.id)
	  	}
	  default:
	  	return{...state}  
	}
}

export default Reducer