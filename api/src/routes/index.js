const { Router } = require('express');
const countries = require('./countries');
const activity = require('./activity');

const router = Router();

// Configurar los routers

router.use('/countries', countries);
router.use('/activity', activity);

// VER ESTOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!!
router.get('/', (req, res) => {
  res.send('hola');
});

module.exports = router;
