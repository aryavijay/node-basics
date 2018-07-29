console.log("Starting Notes App");

const fs = require('fs');

fs.appendFile("note.txt", "How are you. New Text. \r\n", (err)=>{
  if(err){
  console.log("Error Appending file");
  console.log(err);
  }
});
