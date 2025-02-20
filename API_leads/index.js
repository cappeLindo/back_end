import express from 'express';
import cors from 'cors';
import { validarNome, validarEmail, validarTelefone } from './validacao/valida.js';
import { cadastrarUsuario, mostrarUsuarios } from './servicos/cadastro_servico.js';

const app = express();

app.use(cors());
app.use(express.json()); 


app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await mostrarUsuarios();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao recuperar usuários.' });
  }
});


app.post('/usuarios', async (req, res) => {
  const { nome, email, telefone } = req.body;

  if (!validarNome(nome)) {
    return res.status(400).send({ "mensagem"  : "é obrigatório o nome ter mais de 2 caracteres" });
  }

  if (!validarEmail(email)) {
    return res.status(400).send({ "mensagem" : "O email deve ter um formato válido (email@provedor.com)." });
  }

  if (!validarTelefone(telefone)) {
    return res.status(400).send({ "mensagem" : "O telefone deve ter o formato válido (XX) XXXXX-XXXX." });
  }


  try {
    await cadastrarUsuario(nome, email, telefone);
    res.status(201).send({"mensagem" : "Cadastro realizado com sucesso."});
  } catch (err) {
    res.status(500).send({ "mensagem" : "Erro ao cadastrar usuário." });
  }
});


app.listen(9000, () => {
  const data = new Date();
  console.log(`Server iniciado com sucesso na rota  http://localhost:9000/usuarios - ${data}`);
});
