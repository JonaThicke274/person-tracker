const router = require('express').Router();
const sequelize = require('../config/connection');
const {Person} = require('../models');

router.get('/', (req, res) => {
    Person.findAll({
        attributes: [
            'id',
            'last_name',
            'first_name'
        ]
    })
    .then(dbPersonData => {
        res.render('homepage', dbPersonData[0].get({ plain: true }));
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;