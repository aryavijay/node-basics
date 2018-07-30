const notesObj = require('./lib/notes-function.js');
const _ = require('lodash');
const arguments = require('yargs');

let argv = arguments
    .option('title', { alias: 't', description: 'Title to you note'})
    .option('body', { alias: 'b', description: 'Body of Note'})
    //.demandOption(['title', 'body'], 'Please provide both title and body arguments to work with this tool')
    .help()
    .argv;

let res
const command  = argv._[0];

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
