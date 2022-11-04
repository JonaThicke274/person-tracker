const router = require('express').Router();
const UserRoutes = require(`./user-routes`);
const PersonRoutes = require('./person-routes');

router.use(`/user`, UserRoutes)
router.use('/person', PersonRoutes);

module.exports = router;