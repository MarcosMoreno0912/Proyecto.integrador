const Favorite = require('../DB_connection.js');

const postFav = async (req, res) => {
	const { name, origin, status, image, species, gender } = req.body;
	if(!name || !origin || !status || !image || !species || !gender){
		return res.status(401).send('Faltan datos');
	}
	try{
		const [favorite, created] = await Favorite.findOrCreate({
			where: { name, origin, status, image, species, gender },
		});
		const favorites = await Favorite.findAll();
		return res.send(favorites)
	} catch(error){
		return res.status(500).send(error.message);
	}
}

module.exports = {
	postFav,
}