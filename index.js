const express = require('express');

const server = express();

// Query params = ?user=1
// Route params = /users/1
// Request Body = { "nome": "Jorge", "email": "sudoorange@gmail.com"}

server.get('/user', (req, res) => {
  const nome = req.query.nome;

  return res.json({ message: `Hello ${nome}` });
})

server.listen(3000);