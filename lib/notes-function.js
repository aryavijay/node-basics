console.log("Notes Library Loaded");

const addNote =()=>{
  console.log("Add Note function called");
}

const addFun = (a, b) => a+b;

const writefile = () =>{
  fs.appendFile("note.txt",
  `Hello ${user.username}, How are you. You are ${notesObj.age} yrs of age. \r\n`,
  (err)=>{
    if(err){
    console.log("Error Appending file");
    console.log(err);
    }
  });
}

module.exports= {
  age:35,
  addNote,
  addFun,
  writefile,
};
