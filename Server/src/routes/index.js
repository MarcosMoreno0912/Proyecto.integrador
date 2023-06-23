const express = require('express');
const router = express.Router();

const getCharByIdController = require('../controllers/getCharById.js');
const handleFavorites = require('../controllers/handleFavorites.js');
const logIn = require('../controllers/login.js');


router.get('/character/:id', getCharByIdController);
router.get('/login', logIn);
router.post('/fav', handleFavorites.postFav);
router.delete('/fav/:id', handleFavorites.deleteFav);

module.exports = router;