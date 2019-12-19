const fs = require('fs');
const yargs = require('yargs');
const note = require('./notes');
const argv = yargs.argv;
// console.log('Process ' , process.argv);
// console.log('Yargs ' , yargs.argv);

var command = yargs.argv._[0];
var title = yargs.argv.title;
var body = yargs.argv.body;

if(command === 'add'){
    console.log('adding a note');
    note.addingNote(title,body);
}else if(command === 'remove'){
    console.log('removing a note');
    note.removeNote(title);
}else if(command === 'read'){
    console.log('reading a note');
    note.readNote(title);
}else if(command === 'list'){
    console.log('listing a note');
    note.getAll();
}else {
    console.log('unknown command is used');
}