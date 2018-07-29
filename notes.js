console.log("Starting Notes App");

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile("note.txt", `Hello ${user.username}, How are you. New Text. \r\n`, (err)=>{
  if(err){
  console.log("Error Appending file");
  console.log(err);
  }
});
