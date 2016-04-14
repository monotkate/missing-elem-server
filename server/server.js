var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//get the html file
// app.get('/',function(req,res){
//     res.sendfile("index.html");
// });

app.post('/data',function(req,res){
    var array=req.query.array;
    var lowerBound=req.query.lowerBound;
    var upperBound=req.query.upperBound;
    console.log(findMissing(array, lowerBound, upperBound));
    res.end("yes");
});

//Listening for Server
app.listen(8080,function(){
    console.log("Started on PORT 8080");
});

var findMissing = function(array, lowerBound, upperBound) {
    return array;
};
