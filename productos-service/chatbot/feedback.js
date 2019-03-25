var moduleName = 'Feedback';
var fs = require('fs'); 
var csvWriter = require('csv-write-stream')

var userId = "";

var Feedback = function (userId) {
    this.userId = userId;
};
Feedback.prototype.grabarFeedback = function (texto, callback) {

  var writer = csvWriter({sendHeaders: false});
  writer.pipe(fs.createWriteStream("./data/Feedback.csv", {flags: 'a'}));
  writer.write({usuario: this.userId, fecha: 'Hoy', texto: texto}); 
}   
 
module.exports = Feedback;
