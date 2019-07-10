// Create table props in snippets.db
/*
  const sqlite3 = require('sqlite3').verbose();

  let db = new sqlite3.Database('db/snippets.db');

  db.run('CREATE TABLE props(name TEXT, "default" TEXT, type TEXT, description TEXT, PRIMARY KEY ("name"))');

  db.close();
*/
const fs = require("fs");
const sqlite3 = require('sqlite3').verbose();

// Open "props of components".json
const jsonData = JSON.parse(fs.readFileSync("json/chips.json", "utf8"));
// Open snippets.db
let db = new sqlite3.Database('db/snippets.db');

let body;
let prefix;
let descriptionJson;
let defaultText;

jsonData.forEach(element => {
  // Search for prop by name (primary key).
  db.get(`SELECT * FROM props WHERE name = ?`, [element.name], (err, row) => {
    if (err) {
      throw err;
    }
    // Gets a lowercase description without period at the end of the sentence.
    descriptionJson = element.description.toLowerCase().replace((a) => { return a.toUpperCase(); }).replace(/(\.)$/g, '');

    // Compare if the db description contains the json description.
    if (row && !row.description.toLowerCase().includes(descriptionJson)) {
      return console.log(`\x1b[31mDiferent description => ${row.name}\x1b[0m`);
    }else if (!row) { // If prop is not found, format the values to insert.
      defaultText = element.valueDefault.replace((a) => { return a.toUpperCase(); }).replace(/(\')/g, '');
      if (element.type == 'boolean') { // If type is boolean, format the body with only the name and a space at the end.
        body = element.name + ' $0';
      } else { // If you do not format the body with = ${default value} $0
        body = element.name + `=\\""\${1:${defaultText}}\\"" $0`;
      }
      // Constructs a prefix; removes hyphens makes the next letter in upper case.
      prefix = element.name.toLowerCase().replace(/(?:-)\S/g, function (a) { return a.toUpperCase(); }).replace(/(-)/g, '');
      // console.log(element.name + ' ' +
      //             prefix + ' ' +
      //             element.type + ' ' +
      //             '\x1b[33m' + body + '\x1b[0m ' +
      //             element.description);

      // Mounts the insert and run
      db.run(`INSERT INTO props (name, prefix, "default", body, type, description) VALUES ("${element.name}","${prefix}","${defaultText}","${body}","${element.type}","${element.description}")`,
        function (err) {
          if (err) {
            return console.error(err.message);
          }
          console.log(`\x1b[33m==== ${element.name} ==== inserted\x1b[0m`);
        });
    }
    return console.log(`\x1b[32mOK: ${element.name}\x1b[0m`);
  });

});

db.close();