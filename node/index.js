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

app.get('/', (req, res) => {
  res.send('<h1>Full Cycle Rocks!</h1>');
  const sql = `INSERT INTO people(name) VALUES('Erik Urbanski')`;
  const connection = mysql.createConnection(config);
  connection.query(sql);
  connection.end();
});

app.listen(port, () => {
  console.log('Executando na porta!' + port);
});