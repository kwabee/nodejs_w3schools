var fs = require('fs');
const { isBuffer } = require('util');

/*
fs.appendFile('mynewfile1.txt', 'Hello Content!', function(err) {
    if(err) throw err;
    console.log('Saved!');
});
*/

/*
fs.open('mynewfile2.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('Saved!');
});
*/


fs.writeFile('mynewfile2.txt', 'Hello Content!', function(err) {
    if(err) throw err;
    console.log('Saved!');
});


/*
fs.appendFile('mynewfile1.txt', 'This is my text.', function(err) {
    if(err) throw err;
    console.log('Updated!');
});
*/

/*
fs.writeFile('mynewfile3.txt', 'This is my text', function(err) {
    if(err) throw err;
    console.log('Replaced!');
});
*/

/*
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
    if(err) throw err;
    console.log('File Renamed!');
});
*/