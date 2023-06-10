
 const addFav = (character) => {
	return {
		type: "ADD_FAV",
		payload: character
	}
}

 const removeFav = (id) => {
	return {
		type: "REMOVE_FAV",
		payload: id
	}
}

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

export { addFav, removeFav, filterCards, orderCards }