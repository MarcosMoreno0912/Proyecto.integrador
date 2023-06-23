let myFavourites = []

const postFav = (req, res) => {
	const character = req.body
	myFavourites.push(character)
	res.json(myFavourites)
}

const deleteFav = (req, res) => {
	const {id} = req.params
	filtered = myFavourites.filter((character) => character.id !== Number(id))
	myFavourites = filtered

	res.json(filtered)
}

module.exports = { postFav, deleteFav }