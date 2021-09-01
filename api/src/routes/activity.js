const { Router } = require('express');
const router = Router();
const { postActivity } = require('../utils/controllers.js');

//----------------------------------------------- / Activity ---------------------------------------------

router.post('/', postActivity);

module.exports = router;
