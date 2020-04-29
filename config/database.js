const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

// Create postgres database on port 260912
const sequelize = new Sequelize('FiLo','postgres','260912',{
    host:'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})

// Creates an admin user alongside creating the Users table
const seedUsers = () => {
  sequelize.model('Users').create({
    username: "admin",
    firstname: "admin",
    lastname: "admin",
    // Hash the password in the database
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true
  })
}

// Create tables on startup if they don't exist
sequelize
.sync()
.then(() => sequelize.sync({force: true}))
.then(seedUsers)
.then(() => console.log("Seeded Users"))


module.exports = sequelize;
