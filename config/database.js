const Sequelize = require('sequelize');

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

const seedUsers = () => {
  sequelize.model('Users').create({
    username: "admin",
    firstname: "admin",
    lastname: "admin",
    password: "admin",
    isAdmin: true
  })
}


sequelize
.sync()
.then(() => sequelize.sync({force: true}))
.then(seedUsers)
.then(() => console.log("Seeded Users"))


module.exports = sequelize;
