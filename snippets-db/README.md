# Vuetify-Snippet-Pug database
## Tools
- SQLite 3 DB
- Node.js
## Schema
- snippets.db
    - Components table
        - name TEXT (PK)
        - prefix TEXT
        - body TEXT
        - description TEXT
    - Prop table (properties)
        - name TEXT (PK)
        - prefix TEXT
        - default TEXT
        - body TEXT
        - description TEXT
## Install and run
- `git clone https://github.com/lucaslpsan/vuetify-pug-snippet.git`
- `cd snippets-db`
- `npm install`
- `npm start` - Note: this command will generate snippets.json and then replace what is in `C:\Users\%USERNAME%\.vscode\extensions\vuetify-pug-snippet\snippets`, without version number for testing.

The inclusion of new snippets in the database can be done manually (in this case using [DB Browser for SQLite](https://sqlitebrowser.org/) for example) or automatically through a .json file that should be in the /json folder and its name should be included in `prop.js`.

### License
MIT © [lucaslpsan](https://lucaslpsan.github.io/en/)

**Enjoy!**