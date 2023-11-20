import express from 'express';

const app = express();

// inidcar para o express ler o body com json
app.use(express.json());

// mock
const tecnologias = [
   {id: 1, tecnologias: 'Java', grupo: 'Programacao'},
   {id: 2, tecnologias: 'C#', grupo: 'Programacao'},
   {id: 3, tecnologias: 'NodeJs', grupo: 'Framework'},
   {id: 4, tecnologias: 'PHP', grupo: 'Programacao'},
   {id: 5, tecnologias: 'React', grupo: 'Framework'},
   {id: 6, tecnologias: 'VueJs', grupo: 'Framework'},
] 

// retorna o objeto por id
function buscarTecnologiasPorId(id){
  return tecnologias.filter(tecnologias => tecnologias.id == id)  
}

// pegar a posição ou index do elemento no array por id
function buscarIndexTecnologias(id){
  return tecnologias.findIndex(tecnologias => tecnologias.id == id)  
}

// criar rota padrão
app.get('/', (req, res) => {
    res.send('Olá mundo, bem vindo ao Curso de Nodejs!');
});

app.get('/tecnologias', (req, res) => {
    res.status(200).send(tecnologias);
});

app.get('/tecnologias/:id', (req, res) => {
    res.json(buscarTecnologiasPorId(req.params.id));
});

app.post('/tecnologias', (req, res) => {
    tecnologias.push(req.body);
    res.status(201).send('Tecnologias cadastradas com sucesso!');
});

//Deletar por id
app.delete('/tecnologias/:id', (req, res) => {
    let index = buscarIndexTecnologias(req.params.id);
    tecnologias.splice(index, 1);
    res.send(`Tecnologias com id ${req.params.id} excluida com sucesso!`);
});

//Atualizar por id
app.put('/tecnologias/:id', (req, res) => {
    let index = buscarIndexTecnologias(req.params.id);
    tecnologias[index].tecnologias = req.body.tecnologias;
    tecnologias[index].grupo       = req.body.grupo;
    res.json(tecnologias);
});

export default app;
