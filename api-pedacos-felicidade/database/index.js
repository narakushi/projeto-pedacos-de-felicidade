const Sequelize = require('sequelize');


const conection = new Sequelize('bdsitedoces','root', 'admin', 
    { dialect:'mysql', 
    host:'localhost'}
    );



module.exports = conection;



