console.log("Starting Notes App");

const fs = require('fs');
const os = require('os');
const notesObj = require('./lib/notes-function.js');
const _ = require('lodash');

var user = os.userInfo();



//notesObj.addNote();
//console. log(notesObj.addFun(3,4));

const command  = process.argv[2];

// console.log("using lodash")
// console.log(_.isString("ascascacs"));
// console.log(_.isString(12));
// console.log(_.uniq([1,2,3,6,8,1,3,5,2]));

//notesObj.writefile();

// Acting on Command
switch (command){
  case 'add':
    console.log("Add Note");
    break;

  case 'del':
        console.log("delete Node");
        break;

  case 'list':
      console.log("List Node");
      break;

  case 'read':
      console.log("Read Specific Node");
      break;
  default:
    console.log("!!! No Command Specified !!!");
}
