const fs = require("fs");
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('db/snippets.db');

let data = '{';
let contComp = 0, contProps = 0;
let auxBody = '';

db.all('SELECT * FROM components ORDER BY name ASC', [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        var resultado = `\n\t"Vuetify ${row.name}":{
        "prefix": "${row.prefix}",
        "body": ${row.body},
        "description": "${row.description}"
    },`;
        data += resultado;
        contComp++;
    });
    console.log('Components: ' + contComp + ' inserts');
});

db.all('SELECT * FROM props ORDER BY name ASC', [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        auxBody = (row.body.charAt(0) == '[')? row.body: `"${row.body}"`;
        //
        var resultado = `\n\t"Vuetify ${row.name}":{
        "prefix": "${row.prefix}",
        "body": ${auxBody},
        "description": "${row.description}"
    },`;
        data += resultado;
        contProps++;
    });
    console.log('Props: ' + contProps + ' inserts');

    data = data.slice(0, -1) + '\n}'

    fs.writeFile("exit/snippets.json", data, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
});

db.close();