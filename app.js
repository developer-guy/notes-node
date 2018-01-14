const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    }).command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove the note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (_.isUndefined(note)) {
        console.log('There is a duplicate element found in file..')
    } else {
        console.log(`Successfully saved note title: ${note.title}`)
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => {
        notes.logNote(note);
    });
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

