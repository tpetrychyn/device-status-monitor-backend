'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
// placeholder for all 
var dbContext = {};
// connect 
const Op = Sequelize.Op;
const sequelize = new Sequelize('d6p0h0s7gciinc', 'kitadghrbwicut', 'c7f3d7ac8261d2d17b7604333650247beb999eff35e3db8cea4f609c3b4fea9c', {
    host: 'ec2-50-19-110-195.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    },
    operatorsAliases: Op, // use Sequelize.Op
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// imports everything in this directory into entities and register relations later. 
fs.readdirSync(__dirname)
    .filter(function (f) {
        return (f.indexOf('.') !== 0) && (f !== basename) && (f.slice(-3) === '.js');
    })
    .forEach(function (f) {
        var model = sequelize.import(path.join(__dirname, f));
        dbContext[model.name] = model;
    });
// invoke associate methods on models 
Object.keys(dbContext)
    .forEach(function (key) {
        if (dbContext[key].associate) {
            // this will invoke our relationships 
            dbContext[key].associate(dbContext);
        }
    });
// sync context once 
sequelize.sync();
// exports 
module.exports = dbContext;