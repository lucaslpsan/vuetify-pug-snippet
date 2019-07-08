// const sqlite3 = require('sqlite3').verbose();
 
// let db = new sqlite3.Database('db/snippets.db');
 
// db.run('CREATE TABLE components(name TEXT, prefix TEXT, body TEXT, description TEXT, PRIMARY KEY ("name"))');
 
// db.close();

const fs = require("fs");
const sqlite3 = require('sqlite3').verbose();


var jsonData = JSON.parse(fs.readFileSync("json/components.json", "utf8"));

let db = new sqlite3.Database('db/snippets.db');

jsonData.forEach(element => {
    db.run( `INSERT INTO components (name, prefix, body, description) VALUES ("${element.name}","${element.prefix}","${element.body}","${element.description}")`,
            function(err) {
                if (err) {
                  return console.error(err.message);
                }
                console.log(`Rows inserted ${this.changes}`);
              });
});

db.close();