const Favorite = require('../DB_connection.js');

const deleteFav = async (req, res) => {
	const { id } = req.params;

	try{
		const [favorite, deleted] = await Favorite.destroy({
			where: { id },
		});

		const favorites = await Favorite.findAll();
		return res.send(favorites);
	} catch (error){
		return res.status(500).send(error.message);
	}
}

module.exports = {
	deleteFav,
}