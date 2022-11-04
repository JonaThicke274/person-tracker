const sequelize = require('../config/connection');
const { User, Person } = require(`../models`);

const userData = [
    {
        username: 'Jonathicke',
        email: 'lipatajonathan274@gmail.com',
        password: 'password123'
    },
    {
        username: 'ldholl',
        email: 'ldholl@email.com',
        password: 'password123'
    },
    {
        username: 'tmunkhb',
        email: 'tmunkhb@email.com',
        password: 'password123'
    }
]

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});
module.exports = seedUser;