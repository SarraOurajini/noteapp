const fs = require("fs");

const addNotes = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    let noteStr = fs.readFileSync("notes.json");
    notes = JSON.parse(noteStr);
  } catch (e) {}

  let filtredNotes = notes.filter(note => note.title === title);
  if (filtredNotes.length == 0) {
    notes.push(note);
    fs.writeFileSync("notes.json", JSON.stringify(notes));
    console.log("note created");
  } else {
    console.log("note exist");
  }
};

const listNotes = () => {
  let noteStr = fs.readFileSync("notes.json");
  notes = JSON.parse(noteStr);
  console.log(notes);
};

const removeNotes = title => {
  let noteStr = fs.readFileSync("notes.json");
  notes = JSON.parse(noteStr);
  notes = notes.filter(note => note.title !== title);
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const readNotes = title => {
  let noteStr = fs.readFileSync("notes.json");
  notes = JSON.parse(noteStr);
  console.log(notes.filter(note => note.title === title));
};

module.exports = {
  addNotes,
  listNotes,
  removeNotes,
  readNotes
};
