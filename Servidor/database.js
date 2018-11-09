const  mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/transporte')
 .then(db => console.log('Base de datos conectada'))
.catch(error => console.log(db.error));

module.exports = mongoose;
