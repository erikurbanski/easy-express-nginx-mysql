const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: '102030',
  database: 'nodedb',
};

const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
  const sql = `INSERT INTO people(name) VALUES('Erik Urbanski')`;
  connection.query(sql);

  const html = ``;
  connection.query(`SELECT * FROM people`, (error, results) => {
    if (error) {
      return console.error(error.message);
    }
    results.forEach(element => {
      html += `<br>${element.nome}`;
    });
  });

  connection.end();
  res.send('<h1>Full Cycle Rocks!</h1><br>' + html);
});

app.listen(port, () => {
  console.log('Executando na porta!' + port);
});