const seedUser = require('./user-seeds');
const seedPeople = require('./person-seeds');
const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n------------DATABASE SYNCED ----------------\n');
    await seedUser();
    console.log('\n -------------USER SEEDED---------------\n')
    await seedPeople();
    console.log('\n -------------PEOPLE SEEDED---------------\n');

    process.exit(0);
};

seedAll();