var exp = require("express");
var app = exp();

app.use(exp.static(__dirname + "/public"));

var handler = function (req, res){
    var result;  
    result = "Hi from server";
    res.json(result);
	console.log("Server contacted [%s]", result);
};

app.get('/data', handler);

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("server is listening on port " + port);
});