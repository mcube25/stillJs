// a var is a store where you can store values

const { memoryUsage } = require("process");

//they can store data types
var name = "mo musa";
//var is a keyword and inside is the place holder
var age = 23;
var hasMoney = Boolean; //true or false
var empty = undefined;
var semiour = {
    name: 'nure',
    id: 4,
    tall: false
}
console.log(name);
console.log(age);
console.log(empty);
console.log(semiour);
console.log(hasMoney);// native code
//to access an object
console.log(semiour.name);
//or
console.log(Object.values(semiour));
//object within an object
var semiour = {
    name: 'nure',
    id: 4,
    tall: false,
    address: {

    }
}

function addTwenty(num) {
    var add = 20;
    return num + add;
}
console.log(add);
var globalVar = 'i am global';
function consult(str) {
    return str + ' ' + globalVar;
}
console.log(consult('i am hungry'));
if (true) {
    let x = 2;
}
console.log(x);

//when executing a query a result object is returned
//the result object contains information on how the query affected the table

//example of result query returned above
//Get inserted id
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    });
});
// select records ffom the customers table and display the Result object
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});
con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
// selecting columns 
// select names and address from the customers table and return the object
// use SELECT statement followed by column name 
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb"
});
con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

//node js tutorial
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'content-type': 'text/html' });
            return res.end(404, 'Not found');

        }
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(data);
        return res.end();
    });
});
listen(8080);
//node npm package
var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(uc.upperCase('hallo world'));
    res.end();
}).listen(8080);
//events in node js
var fs = require('fs');
var rs = fs.createreadstream('./demofile.txt');
rs.on('open' function () {
    console.log('the file is opoen')
});
//events module
var events = require('events');
var eventEmitter = new events.eventEmitter();
//the event emitter object
//to fire an event use the emit() method
var events = require('events');
var eventEmitter = new events.eventEmitter();
//create an eventhandler
var myEventHandler = function () {
    console.log('i hear a scream');
}
//assign the eventhandler to an event
eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');


//node.js upload file
//the formidable module
//install formidable
//npm install formidable
//include the module in any application
var formidable = require('formidable');
//create a node.js file that writes a html form with an upload field
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<form-action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
}).listen(8080);
//save the file
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function (req, res) {
    if (req.url == '\fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        }else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');
            return res.end();
        }
}).listen(8080);
//node mailer module
//it can be downloaded and installed using npm
//download and install the node mailer module
//after installing it can be used in any application
var nodemailer = require('nodemailer');


//send an email
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mcube3567@gmail.com',
        pass: 'mypassword'
    }
});

var mailOptions = {
    from: 'mymail@gmail.com',
    to: 'mywife@yahoo.com',
    subject: 'sending mail with node.js',
    text: 'that was easy',
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('email sent' + info.response);
    }
});
//server now ready to send emails

//multiple receivers
//send mail to more than one address
var mailOptions = {
    from: 'mcube3567@gmail.com',
    to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
    subject: 'sending mail with node.js',
    text: 'that was easy',
}
//send html
//send email containing html
var mailOptions = {
    from: 'mcube3567@gmail.com',
    to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
    subject: 'sending mail with node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
}
