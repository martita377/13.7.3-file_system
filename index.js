var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
    if (err) throw err;
    console.log('Lista plików w bieżącym katalogu: '.green);
    console.log(files);
    fs.writeFile('text.txt', files, 'utf-8', function(err, data) {
        console.log('Lista plików została zapisana w: '.red + 'text.txt'.yellow);
    });
});