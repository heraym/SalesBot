var fs = require('fs'); 
var parse = require('csv-parse');

var csvData=[];
fs.createReadStream("Precios.csv")
    .pipe(parse({delimiter: ';', columns: true}))
    .on('data', function(csvrow) {
        console.log(csvrow.Categoria);
        //do something with csvrow
        csata.push(csvrow);        
    })
    .on('end',function() {
      //do something wiht csvData
      //console.log(csvData);
    });