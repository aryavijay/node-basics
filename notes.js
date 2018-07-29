console.log("Starting Notes App");

const fs = require('fs');
const os = require('os');
const notesObj = require('./lib/notes-function.js');

var user = os.userInfo();

function writefile(){
  fs.appendFile("note.txt",
  `Hello ${user.username}, How are you. You are ${notesObj.age} yrs of age. \r\n`,
  (err)=>{
    if(err){
    console.log("Error Appending file");
    console.log(err);
    }
  });
}

notesObj.addNote();
console. log(notesObj.addFun(3,4));

//writefile();
