const express = require('express');
const router = express.Router();

const getCharByIdController = require('../controllers/getCharById.js');
const { postFav } = require('../controllers/postFav.js');
const { deleteFav } = require('../controllers/deleteFav.js');
const { login } = require('../controllers/login.js');
const { postUser } = require('../controllers/postUser.js');


router.get('/character/:id', getCharByIdController);
router.get('/login', login);
router.post('/login', postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;