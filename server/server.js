var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();

//Here we are configuring express to use body-parser as middle-ware.
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 8080));

app.get('/', function(req, res) {
    res.sendfile("index.html");
});

//Processing Data Post
app.post('/data',function(req,res){
    var array = req.body.array;
    var lowerBound = req.body.lowerBound;
    var upperBound = req.body.upperBound;
    var missingElem = findMissing(array, lowerBound, upperBound).toString();
    var responseObj = {
        "status": "Okay",
        "result": missingElem
    };
    res.status(200).json(responseObj);

});

//Listening for Server
app.listen(app.get('port'),function(){
    console.log("Started on port ", app.get('port'));
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
