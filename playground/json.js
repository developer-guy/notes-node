/* var obj = {
    name: 'Andrew'
};


var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
*/

/* var personString = '{"name":"Andrew","age": 25}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(`Person name: ${person.name} Age: ${person.age}`);
*/

const fs = require('fs');

var originalNote = {
    title: 'Some valid title',
    body: 'Some valid body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);