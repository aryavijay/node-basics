const mongodb = require('mongodb').MongoClient;


const dbConn = mongodb.connect("mongodb://localhost:27017/todo/", {useNewUrlParser: true}, (err, dbObj) => {
    if (err) {
        console.log("Can't connect to DB");
        return;
    }
    console.log("Connected to Todo MongoDb");
    var d = dbObj.db('todo');
    d.collection('todo').insertOne({task: "Interview", completed: 0}, (err, res) => {
        if (err) {
            console.log("Can't Insert");
            return;
        }
        console.log("Here");
        console.log(JSON.stringify(res.ops, null, 3));
    })
});