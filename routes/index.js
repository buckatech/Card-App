const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const insert = require('../server/serveHelper/insert')

router.use(indexController.set_data)
// Get home page
router.get('/', indexController.render_homepage);
// Get saved games page
router.get('/savedgames', indexController.render_savegames);
// Get goofSpiel
router.get('/goofSpiel', indexController.render_game_goof);
// Post to goofSpiel
router.post('/goofSpiel', indexController.post_game_goof);

//router.get('/gofish', indexController.render_game_gofish);
// router.post('/login', indexController.post_login);
// // Post to register
// router.post('/register', indexController.post_register);
// // Post to logout
// router.post('/logout', indexController.post_logout);

/*TODO ERROR HANDLERS */

// router.get('/loginErr', indexController.render_loginErr);

module.exports = router;