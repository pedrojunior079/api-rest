import express from 'express';

const app = express();

// inidcar para o express ler o body com json
app.use(express.json());

// mock
const linguagensDeProg = [
   {id: 1, linguagensDeProg: 'Java'},
   {id: 2, linguagensDeProg: 'C#'},
   {id: 3, linguagensDeProg: 'PHP'},
   {id: 4, linguagensDeProg: 'HTML5'},
   {id: 5, linguagensDeProg: 'CSS3'},
   {id: 6, linguagensDeProg: 'JavaScript'}
] 


// criar rota padrão
app.get('/', (req, res) => {
   res.send('Olá mundo, bem vindo ao Curso de Nodejs!');
});

app.get('/linguagensDeProg', (req, res) => {
   res.status(200).send(linguagensDeProg);
});

app.post('/linguagensDeProg', (req, res) => {
   frameworks.push(req.body);
   res.status(201).send('Framework cadastrado com sucesso!');
});

export default app;
