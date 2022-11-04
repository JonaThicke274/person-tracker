const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(require('./controllers'));

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))
});