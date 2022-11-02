const { Person } = require('../models');

const personData = [
    {
        last_name: 'Olafson',
        first_name: 'Freyja',

    },
    {
        last_name: 'Abbia',
        first_name: 'Noctis'
    },
    {
        last_name: 'Pratnicki',
        first_name: 'Charles'
    }
];

const seedPeople = () => Person.bulkCreate(personData);
module.exports = seedPeople;