const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, esta es la página de inicio de la aplicación.');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});