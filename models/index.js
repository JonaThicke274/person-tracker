// import models
const User = require(`./User`);
const Person = require('./Person');

// model associations

User.hasMany(Person, {
    foreignKey: `user_id`
});

Person.belongsTo(User, {
    foreignKey: `user_id`
});


module.exports = {
    Person,
    User
}