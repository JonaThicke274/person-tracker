const router = require('express').Router();
const sequelize = require('../config/connection');
const { Person } = require('../models');

router.get('/:id', (req, res) => {
    Person.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'last_name',
            'first_name'
        ]
    })
    .then(dbPersonData => {
        res.render('profile', dbPersonData.get({ plain: true }));
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

module.exports = router;