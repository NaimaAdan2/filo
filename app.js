const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//Database
const db = require('./config/database.js');

//testing DB
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error:' + err))

const app = express();
app.use(bodyParser.json())

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => res.render('index', { layout: 'landing' }));


// items routes
app.use('/items', require("./routes/items.js"));
app.use('/register', require("./routes/register.js"));
app.use('/login', require("./routes/login.js"));
app.use('/item', require("./routes/item.js"));
app.use('/additem', require("./routes/additem.js"));
app.use('/itemadmin', require("./routes/itemadmin.js"));




const PORT = process.env.PORT || 2013;

app.listen(PORT, console.log('Server started on port ${PORT}'));
