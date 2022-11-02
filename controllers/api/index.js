const router = require('express').Router();
const PersonRoutes = require('./person-routes');

router.use('/person', PersonRoutes);

module.exports = router;