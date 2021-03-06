var moduleName = 'Productos';
var fs = require('fs'); 
var parse = require('csv-parse');
var Promise = require("bluebird");


var Productos = function (userId) {
    this.userId = userId;
};

Productos.prototype.detalleProducto = function (idProducto, callback) {

var csvData=[];
fs.createReadStream("./data/Productos.csv")
    .pipe(parse({delimiter: ';', columns: true}))
    .on('data', function(csvrow) {
         //do something with csvrow
        if (idProducto == csvrow.PartNumber) 
           { csvData.push(csvrow); }
    })
    .on('end',function() {
      //do something wiht csvData
      //console.log(csvData);
	  callback(csvData);
    });
}

Productos.prototype.productosFamilia = function (idFamilia, callback) {

var csvData=[];
fs.createReadStream("./data/Productos.csv")
    .pipe(parse({delimiter: ';', columns: true}))
    .on('data', function(csvrow) {
         //do something with csvrow
       if (idFamilia == csvrow.Familia)
	      { csvData.push(csvrow); }        
    })
    .on('end',function() {
      //do something wiht csvData
      callback(csvData);
    });
}

Productos.prototype.detalleFamilia = function (idFamilia, callback) {

var csvData=[];
fs.createReadStream("./data/Familias.csv")
    .pipe(parse({delimiter: ';', columns: true}))
    .on('data', function(csvrow) {
         //do something with csvrow
       if (idFamilia == csvrow.Familia)
	      { csvData.push(csvrow); }        
    })
    .on('end',function() {
      //do something wiht csvData
      callback(csvData);
    });
}

Productos.prototype.categoriasLinea = function (idLinea, callback) {

var categorias=[]; 
fs.createReadStream("./data/Familias.csv")
    .pipe(parse({delimiter: ';', columns: true}))
    .on('data', function(csvrow) {
         //do something with csvrow
       if (idLinea == csvrow.Linea)
	      { if (categorias.indexOf(csvrow.Categoria) == -1) 
			  { categorias.push(csvrow.Categoria); }
          }		  
    })
    .on('end',function() {
      //do something wiht csvData
      callback(categorias);
    });
}

Productos.prototype.familiasCategoria = function (idCategoria, callback) {

var csvData=[];
fs.createReadStream("./data/Familias.csv")
    .pipe(parse({delimiter: ';', columns: true}))
    .on('data', function(csvrow) {
         //do something with csvrow
       if (idCategoria == csvrow.Categoria)
	      { csvData.push(csvrow); }        
    })
    .on('end',function() {
      //do something wiht csvData
      callback(csvData);
    });
}
Productos.prototype.lineas = function (callback) {

var lineas=[]; 
fs.createReadStream("./data/Familias.csv")
    .pipe(parse({delimiter: ';', columns: true}))
    .on('data', function(csvrow) {
         //do something with csvrow
       if (lineas.indexOf(csvrow.Linea) == -1)
	      { lineas.push(csvrow.Linea); }        
    })
    .on('end',function() {
      //do something wiht csvData
      callback(lineas);
    });
}
module.exports = Productos;
