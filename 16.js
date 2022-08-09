const queryString = require('query-string');
const colors = require('colors');
const lodash = require('lodash');
const http = require('http');
var validator = require('validator');


const myUrl = "https//www.wepage.com/page?a=23&b=45";
console.log("Url search ", myUrl.search);
const parsed = queryString.parse(myUrl);
console.log("Parsed String: ", parsed);

parsed.a = 'unicorn';
parsed.b = 'pizza';

const stringified = queryString.stringify(parsed);
console.log("stringified ", stringified)



console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

var string = 'My String';
console.log("Uppercase : ", lodash.toUpper(string));
console.log("Lowercase : ", lodash.toLower(string));

http.createServer(function(req, res) {

    res.write("Welcome to your server.");
}).listen(3001);
console.log("Server created at 3001!")

var result = validator.isEmail('foo@bar.com'); //=> true
console.log(result)