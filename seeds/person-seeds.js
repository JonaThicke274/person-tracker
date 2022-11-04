const { Person } = require('../models');

const personData = [
    {
        last_name: 'Olafson',
        first_name: 'Freyja',
        // user_id: 1

    },
    {
        last_name: 'Abbia',
        first_name: 'Noctis',
        // user_id: 2
    },
    {
        last_name: 'Pratnicki',
        first_name: 'Charles',
        // user_id: 3
    }
];

const seedPeople = () => Person.bulkCreate(personData);
module.exports = seedPeople;