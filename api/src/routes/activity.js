const { Router } = require('express');
const router = Router();
const { postActivity, getActivities} = require('../utils/controllers.js');

//----------------------------------------------- / Activity ---------------------------------------------

router.post('/', postActivity);

router.get('/get', getActivities)

module.exports = router;
