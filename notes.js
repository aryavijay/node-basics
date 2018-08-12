console.log("Starting Notes App");

const notesObj = require('./lib/notes-function.js');

const _ = require('lodash');
const argv = require('yargs').argv;

let res;
const command  = argv._[0];

console.log(notesObj.age);

// Acting on Command
switch (command){
  case 'add':
      notesObj.addNote(argv.title, argv.body);
      console.log("Note Added");
    break;

  case 'del':
        res = notesObj.removeNote(argv.title);
        console.log(res);
        break;

  case 'list':
      res = notesObj.list();
      console.log(res);
      break;

  case 'read':
     res  = notesObj.readNote(argv.title);
      console.log("===========");
      console.log(res);
      break;
  default:
    console.log("!!! No Command Specified !!!");
}
