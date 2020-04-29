const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Handlebars = require('handlebars');
const session = require('client-sessions');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

//Database
const db = require('./config/database.js');

//testing DB
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error:' + err))

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

// Handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// When connecting Handlebars to the Express app...
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    // ...implement newly added insecure prototype access
    handlebars: allowInsecurePrototypeAccess(Handlebars)
    })
);


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => res.render('landing', { layout: false, isLoggedIn: req.session && req.session.user }));


// items routes
app.use('/items', require("./routes/items.js"));
app.use('/register', require("./routes/register.js"));
app.use('/login', require("./routes/login.js"));
app.use('/logout', require("./routes/logout.js"));
app.use('/item', require("./routes/item.js"));
app.use('/additem', require("./routes/additem.js"));
app.use('/itemadmin', require("./routes/itemadmin.js"));
app.use('/requests', require("./routes/requests.js"));





const PORT = process.env.PORT || 2013;

app.listen(PORT, console.log('Server started on port ${PORT}'));
