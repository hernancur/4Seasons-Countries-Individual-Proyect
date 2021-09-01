const { Router, response } = require('express');
const router = Router();
const { findById, findAll } = require('../utils/controllers.js');

//----------------------------------------------------- / Countries -------------------------------------------

router.get('/', findAll);

router.get('/:id', findById);

module.exports = router;
