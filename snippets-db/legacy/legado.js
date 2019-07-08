// const sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database('db/snippets.db');

// db.run('CREATE TABLE props(name TEXT, prefix TEXT, "default" TEXT, body TEXT, type TEXT, description TEXT, PRIMARY KEY ("name"))');

// db.close();
const fs = require("fs");
const sqlite3 = require('sqlite3').verbose();


var jsonData = JSON.parse(fs.readFileSync("json/snippets.json", "utf8"));
let db = new sqlite3.Database('db/snippets.db');


for (var key in jsonData) {
  db.run(`INSERT INTO props (prefix, body, description) VALUES ("${jsonData[key].prefix}","${jsonData[key].body.replace(/(")/g, function (a) { return a.toUpperCase(); }).replace(/(")/g, '\\""')}","${jsonData[key].description.replace(/(")/g, function (a) { return a.toUpperCase(); }).replace(/(")/g, '\\""')}")`,
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Rows inserted ${this.changes}`);
    });
  // console.log(jsonData[key].body.replace(/(")/g, function (a) { return a.toUpperCase(); }).replace(/(")/g, '\\"'));
}

db.close();