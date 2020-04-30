const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

var database = process.env.DATABASE_URL || 'FiLo'
var sequelize = ""

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(database)
} else {
    sequelize = new Sequelize(database, 'postgres', '', {
      host:'localhost',
      dialect: 'postgres',
      operatorsAliases: false,
      pool:{
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
      }})
}

// Creates an admin user alongside creating the Users table
const seedUsers = () => {
  sequelize.model('Users').create({
    username: "admin",
    firstname: "admin",
    lastname: "admin",
    // Hash the password in the database
    password: bcrypt.hashSync("testAdminPassword123", 10),
    isAdmin: true
  })
  .then(ignored => {
    sequelize.model('Users').create({
      username: "suaadsuldan",
      firstname: "suaad",
      lastname: "suldan",
      // Hash the password in the database
      password: bcrypt.hashSync("testPassword123", 10),
      isAdmin: false
    })})
  .then(ignored => {
    sequelize.model('Items').create({
      category: "Phone",
      colour: "Black",
      date: "01/01/2019",
      description: "Black samsung galaxy s9",
      imageURL: "https://i.insider.com/5aafc44e92c06933008b4a01?width=1100&format=jpeg&auto=webp"
    })})
  .then(ignored => {
    sequelize.model('Items').create({
      category: "Laptop",
      colour: "Grey",
      date: "01/01/2019",
      description: "Macbook pro 2017",
      imageURL: "https://d2h1pu99sxkfvn.cloudfront.net/b0/3351511/450333864_lyN9Cd3mSD/P0.jpg"
    })})
  .then(ignored => {
    sequelize.model('Items').create({
      category: "Car",
      colour: "White",
      date: "01/01/2019",
      description: "2019 parked white tesla",
      imageURL: "https://www.tesla.com/sites/default/files/images/charging/model-s-range-desktop.png"
    })})
  .then(ignored => {
    sequelize.model('Items').create({
      category: "Keys",
      colour: "Gold",
      date: "01/01/2019",
      description: "Golden/Silver house keys",
      imageURL: "https://www.picklock24.com/media/image/product/84/md/bump-key-set-europe-supplement-14-keys.jpg"
    })})
    .then(ignored => {
      sequelize.model('Items').create({
        category: "Person",
        colour: "White",
        date: "07/03/2007",
        description: "Young maddie, lost in my hotel room",
        imageURL: "https://www.thesun.co.uk/wp-content/uploads/2020/04/NINTCHDBPICT000308321581.jpg"
      })})
}

// Create tables on startup if they don't exist
sequelize
.sync()
.then(() => sequelize.sync({force: true}))
.then(seedUsers)
.then(() => console.log("Seeded Users"))


module.exports = sequelize;
