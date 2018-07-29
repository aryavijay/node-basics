console.log("Notes Library Loaded");
const fs = require('fs');

const notesArray = () =>{
  let notes
  try{
    notes = JSON.parse(fs.readFileSync("notes.json"));
  }catch(ex){
    notes = [];
  }
  return notes;
}

const addNote =(title, body)=>{
  let notes = notesArray();
  let noteObj =  {title, body};
  notes.push(noteObj)
   writefile(notes);
}

const readNote = (title) =>{
  let notes =notesArray();
  let res = null;
  if(notes.length > 0){
    res =  notes.filter( x => x.title ===  title);
    if(res.length > 0){
      return res;
    }
  }

  return "No Notes in System";
}

const addFun = (a, b) => a+b;

const writefile = (note) =>{
  fs.writeFile("notes.json",
  JSON.stringify(note),
  (err)=>{
    if(err){
    console.log("Error Appending file");
    console.log(err);
    }
  });
}

list = () =>{
  let notes =notesArray();
  let res = null;
  if(notes.length > 0){
    res =  notes.map( x => x.title);
    if(res.length > 0){
      return res;
    }
  }

  return "No Notes in System";
}

removeNote = (title) => {
    let notes = notesArray();
    let newNotes =[];
    newNotes = notes.filter(x => x.title !== title);
    writefile(newNotes);
    return `Notes with title : "${title}" are removed`;
}

module.exports= {
  age:35,
  addNote,
  addFun,
  writefile,
  readNote,
  list,
  removeNote,
};
