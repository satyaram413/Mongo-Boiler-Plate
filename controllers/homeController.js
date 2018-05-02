
var mongoose=require('mongoose');
var Schema= mongoose.Schema;


var kriDataSchema=new Schema(
    {
        RCL1:String,
        RCL2:String,
        RCL3:String,
        Loc:String,
        BUF:String,
        kri:String,
        KV:Number,
        TP:Date
        
    }
    , {collection: 'KRI_DB'}
);


try{
    var KriData=mongoose.model('KriData',kriDataSchema);
    console.log('right here');
     }
     catch(e){
         console.log(e);
    
     }



var mongoUrl='mongodb://localhost:27017/Master_Screen_DB';
mongoose.connect(mongoUrl,function(err)
{
    if (err)
    console.log('Nop');

    else
    console.log('Connection Made');
});
mongoose.connection.on('connected',function()
{
console.log("Mongood Default connection open to " +mongoUrl);

});
mongoose.connection.on('err',function()
{
    console.log("Mongo Threw an error connectiong to your database "+err);
})


module.exports=function(app)
{

    

    
 app.get(['/index','/home','/'],function(req,res)
{console.log("hey");
    res.render('home');
});

//getting the kri to be displayed
app.get('/kri',function(req,res)
{
res.render('kri');
});

//
app.get('/show_data',function(req,res,next)

{
   
   KriData.find()
   .then(function(doc)
{
    res.render('show_data',{items:doc});
    
});
});




app.post('/insert',function(req,res,next)
{
    var item={
        RCL1:req.body.RCL1,
        RCL2:req.body.RCL2,
        RCL3:req.body.RCL3,
        Loc:req.body.Loc,
        BUF:req.body.BUF,
        kri:req.body.kri,
        KV:req.body.KV,
        TP:req.body.TP
};

    var data=new KriData(item);
    
        data.save();
    return res.redirect('/kri');

    

});

// app.post('/update',function(req,res,next)
// {
//     res.render('update');
    
// var id=req.body.id;
// KriData.findById(id, function(err,doc)
// {
//     if(err)
//     console.error("Error, no entry found");
//     RCL1:req.body.RCL1;
//     RCL2:req.body.RCL2;
//     RCL3:req.body.RCL3;
//     Loc:req.body.Loc;
//     BUF:req.body.BUF;
//     kri:req.body.kri;
//     KV:req.body.KV;
//     TP:req.body.TP;
//     doc.save();
// });

// })
 


}