var http = require('http');
var port=3856;
var hostname="127.0.0.1";
var formidable = require('formidable');
var url=require('url');

var server=http.createServer( (req, res)=> {
    res.statusCode=200;
    if(req.url=='/fileupload'){
        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields, files)
    {
        res.write('File uploaded');
        res.end();
    });
    }
    else{
res.setHeader( 'Content-Type', 'text/html');
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}
server.listen(port,hostname,()=> {
	console.log("Server Started on port " +port);
})
});
