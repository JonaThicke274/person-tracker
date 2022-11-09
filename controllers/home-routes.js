const router = require('express').Router();
const sequelize = require('../config/connection');
const {Person, Notes } = require('../models');

// router.get('/', (req, res) => {
//     Person.findAll({
//         attributes: [
//             'id',
//             'last_name',
//             'first_name'
//         ]
//     })
//     .then(dbPersonData => {
//         console.log(dbPersonData);
//         const persons = dbPersonData.map(post=> post.get({ plain: true}))
//         res.render('homepage', { 
//             persons,
//             loggedIn: req.session.loggedIn
//          }) 
        
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err)
//     })
// });

router.get(`/login`, (req, res) => {
    if (req.session.loggedIn) {
        res.redirect(`/`);
        return;
    }

    res.render(`login`);
});


module.exports = router;