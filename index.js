const express = require('express');

const server = express();

// Query params = ?user=1
// Route params = /users/1
// Request Body = { "nome": "Jorge", "email": "sudoorange@gmail.com"}

server.get('/users/:id', (req, res) => {
  const id = req.params.id;

  return res.json({ message: `Searching user ${id}` });
})

server.listen(3000);