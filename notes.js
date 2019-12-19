var fs = require('fs');


function fetchNotes(){
    try {
       return JSON.parse(fs.readFileSync('note.txt')); 
    } catch (error) {
        return [];
    }
}

function addingNote(title, body){

     var notes = fetchNotes();

  var note ={
      title,
      body
  };

  notes.push(note);

  fs.writeFileSync('note.txt',JSON.stringify(notes));
  logNote(note);
}

function removeNote(title){
  var notes = fetchNotes();

  var filternotes = notes.filter((note)=>note.title !== title);

  fs.writeFileSync('note.txt',JSON.stringify(filternotes));
  
}

function readNote(title){
    var notes = fetchNotes();
  
    var filternotes = notes.filter((note)=>note.title === title);
  
   // console.log(`Title:${filternotes[0].title} Body:${filternotes[0].body}`);
   logNote(filternotes[0]);
}

function getAll(){
    var notes = fetchNotes();
    notes.forEach((note)=>logNote(note));
}

var logNote = function(note){
    console.log("*******************************");
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);

}

module.exports ={
    addingNote,
    removeNote,
    readNote,
    getAll
}