const fs = require("fs");
const sqlite3 = require('sqlite3').verbose();

const jsonData = JSON.parse(fs.readFileSync("json/alerts.json", "utf8"));
let db = new sqlite3.Database('db/snippets.db');

jsonData.forEach(element => {
    db.run(`UPDATE props SET description = "${element.description}" WHERE name = "${element.name}"`,
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`\x1b[33m==== ${element.name} ==== updated\x1b[0m`);
    });
});