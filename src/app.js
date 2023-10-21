const express = require('express');
const app = express();
const port = 3000;

// criar rota padrão
app.get('/', (req, res) => {
   res.send('Olá mundo, bem vindo ao Curso de Nodejs!');
});

// escutar a porta 3000
app.listen(port, () => {
   console.log(`Servidor rodando no endereço http://localhost:${port}`); 
});
