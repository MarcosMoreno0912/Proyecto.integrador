const User = require('../DB_connection.js');


const postUser = async (req, res) => {
	const { email, password } = req.body;
	if(!email || !password){
		return res.status(400).send("Faltan datos");
	}
	try{
		const [user, created] = await User.findOrCreate({
			where: { email },
			defaults: { password },
		});
		return res.send(user);
	} catch(error){
		return res.status(500).send(error.message);
	};
}

module.exports = {
	postUser,
}