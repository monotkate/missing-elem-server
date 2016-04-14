var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Processing Data Post
app.post('/data',function(req,res){
    var array=[];
    array = req.body.array;
    var lowerBound=req.body.lowerBound;
    var upperBound=req.body.upperBound;
    console.log(findMissing(array, lowerBound, upperBound));
    res.end("yes");
});

//Listening for Server
app.listen(8080,function(){
    console.log("Started on PORT 8080");
});

var findMissing = function(array, lowerBound, upperBound) {
    var testArray = [];
    var length = upperBound - lowerBound;

    for(var i = 0; i < array.length; i++) {
        if(array[i] !== ' ')
            testArray[array[i]] = true;
    };

    for(var i = lowerBound; i < testArray.length; i++) {
        if(typeof testArray[i] === 'undefined') {
            return i;
        }
    };
    return null;
};
