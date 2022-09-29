const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");


const sess = {
    secret: "4d85024b-34c2-4841-8393-0c536f70c70c",
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    })
}


app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(require('./controllers'));

sequelize.sync({force: false}).then(() =>{
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
})