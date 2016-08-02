var fs = require('fs');
var chalk = require("chalk");

console.log("Asynch BEGIN");
var options = {encoding: 'utf8', flag: 'r'};

console.log(chalk.yellow("Data1 contents start"));
fs.readFile('./data1.txt', options, function(err, fileData){
	if (err){
		console.log(chalk.yellow("File not found"));
	}else{
		console.log(chalk.yellow(fileData));
		console.log(chalk.yellow("Data1 contents over"));
	};
});

console.log(chalk.green("Data contents start"));
fs.readFile('./data.txt', options, function(err, fileData){
	if (err){
		console.log(chalk.green("File not found"));
	}else{
		console.log(chalk.green(fileData));
		console.log(chalk.green("Data contents over"));
	};
});

console.log("Asynch Program ends");

