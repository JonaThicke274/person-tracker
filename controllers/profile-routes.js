const router = require('express').Router();
const sequelize = require('../config/connection');
const { Person, Notes } = require('../models');

router.get('/:id', (req, res) => {
    Person.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'last_name',
            'first_name',
            'has_children',
            'has_pets',
            'likes_sports',
            'likes_media'
        ],
        include: [
            {
                model: Notes,
                attributes: ['id', 'note_text', 'person_id']
            }
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

router.get('/edit/:id', (req, res) => {
    Person.update({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        has_children: req.body.has_children,
        has_pets: req.body.has_pets,
        likes_sports: req.body.likes_sports,
        likes_media: req.body.likes_media
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbPersonData => {
        if(!dbPersonData[0]){
            res.status(404).json({ message: 'Nobody found with this id'});
            return;
        }
        res.json({ message: 'Profile Updated!'})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
})




module.exports = router;