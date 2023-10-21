import express from 'express';

const app = express();

// mock
const frameworks = [
   {id: 1, frameworks: 'Laravel'},
   {id: 2, frameworks: 'Node'},
   {id: 3, frameworks: 'Vue'},
   {id: 4, frameworks: 'React'},
   {id: 5, frameworks: 'Angular'}
] 


// criar rota padrão
app.get('/', (req, res) => {
   res.send('Olá mundo, bem vindo ao Curso de Nodejs!');
});

app.get('/frameworks', (req, res) => {
   res.status(200).send(frameworks);
});

export default app;
