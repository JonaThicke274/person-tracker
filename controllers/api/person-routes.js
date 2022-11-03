const router = require('express').Router();
const {Person} = require('../../models');


//get all people
router.get('/', (req, res) => {
   Person.findAll({
    attributes: [
        'id',
        'last_name',
        'first_name'
    ]
   })
   .then(dbPersonData => res.json(dbPersonData))
   .catch(err => {
    console.log(err);
    res.status(500).json(err);
   })
});


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
        if(!dbPersonData){
            res.status(404).json({ message: 'Nobody found with this id'});
            return;
        }
        res.json(dbPersonData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;