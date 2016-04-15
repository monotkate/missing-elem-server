var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();

//Here we are configuring express to use body-parser as middle-ware.
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Processing Data Post
app.post('/data',function(req,res){
    var array = req.body.array;
    var lowerBound=req.body.lowerBound;
    var upperBound=req.body.upperBound;
    var missingElem = findMissing(array, lowerBound, upperBound).toString();
    res.end(missingElem);

});

//Listening for Server
app.listen(8080,function(){
    console.log("Started on PORT 8080");
});

var findMissing = function(array, lowerBound, upperBound) {
    var testArray = [];
    var length = upperBound - lowerBound;

    for(var i = 0; i < array.length; i++) {
        testArray[array[i]] = true;
    };

    for(var i = lowerBound; i < upperBound+1; i++) {
        if(typeof testArray[i] === 'undefined') {
            return i;
        }
    };
    return "Isn't Missing Anything";
};
