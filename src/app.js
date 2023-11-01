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

// retorna o objeto por id
function buscarLinguagensDeProgPorId(id){
  return linguagensDeProg.filter(linguagensDeProg => linguagensDeProg.id == id)  
}

// pegar a posição ou index do elemento no array por id
function buscarIndexLinguagensDeProg(id){
  return linguagensDeProg.findIndex(linguagensDeProg => linguagensDeProg.id == id)  
}

// criar rota padrão
app.get('/', (req, res) => {
    res.send('Olá mundo, bem vindo ao Curso de Nodejs!');
});

app.get('/linguagensDeProg', (req, res) => {
    res.status(200).send(linguagensDeProg);
});

app.get('/linguagensDeProg/:id', (req, res) => {
    res.json(buscarLinguagensDeProgPorId(req.params.id));
});

app.post('/linguagensDeProg', (req, res) => {
    frameworks.push(req.body);
    res.status(201).send('Framework cadastrado com sucesso!');
});

app.delete('/linguagensDeProg/:id', (req, res) => {
    let index = buscarIndexLinguagensDeProg(req.params.id);
    linguagensDeProg.splice(index, 1);
    res.send(`Linguagem de Programação com id ${req.params.id} excluida com sucesso!`);
});

export default app;
