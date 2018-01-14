const fs = require('fs');


const fetchNotes = () => {
    var notes = [];
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }
    return notes;
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    var notes = fetchNotes();
    var note = { // ES6 feature
        title,
        body
    };


    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};


const getAll = () => {
    return fetchNotes();
};


const getNote = (title) => {
    let notes = fetchNotes();
    return notes.filter(note => note.title === title)[0];
};


const removeNote = (title) => {
    let notes = fetchNotes();

    let filteredNotes = notes.filter(note => note.title !== title);

    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
    console.log(`Note title : ${note.title} and body :  ${note.body}.`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
