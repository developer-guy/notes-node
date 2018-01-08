console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;

var command = argv._[0];
console.log(`Command ${command}`);

console.log('Yargs:', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (_.isUndefined(note)) {
        console.log('There is a duplicate element found in file..')
    } else {
        console.log(`Successfully saved note title: ${note.title}`)
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    let body = _.isUndefined(note) ? `${argv.title} not found` : note.body;
    console.log(body);
} else if (command === 'remove') {
    let isRemoved = notes.removeNote(argv.title);
    let message = isRemoved ? `${argv.title} was successfully removed` : `${argv.title} note wasn't removed`;
    console.log(message);
} else {
    console.log('Command not recognized');
}

