var express = require('express');
var mongodb = require('mongodb');
// var uri= require('./config/config').mongouri;
var MongoClient = mongodb.MongoClient;
var multer = require('multer');
var app=express();
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(express.static('public'));

// var storage = multer.diskStorage
// ({
//     destination: function (req, file, cb)
//     {
//         cb(null, 'public/uploads/')
//     },

//     filename: function (req, file, cb)
//     {
//         cb(null, file.fieldname + '-' + Date.now()+'.jpg')
//     }
// });


const GridFsStorage = require('multer-gridfs-storage');

// mongodb v3 using a promise
const promise = MongoClient
.connect('mongodb://localhost:27017')
.then(
    client => client.db('test'));



const storage = new GridFsStorage({
  db: promise,
  file: (req, file) => 
  {
    
    if(file.mimetype === 'image/jpeg')
    return {filename: 'file_' + Date.now()+'.jpg'};

    else
    return {filename: 'file_' + Date.now()+'.xlsx'};
  }
});

var upload = multer({ storage: storage });



app.get('/fileup', function(req, res)
{

    res.render('fileup');

});



MongoClient.connect("mongodb://localhost:27017", {poolSize:2},
 function(err,client)
{

    app.post('/fileup', upload.single('profile'), function (req, res) 
    {

        res.send(req.file);
    });
    

});



port =3000;

var server = app.listen(port, function () 
  {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);

  });


server.timeout = 10000;


