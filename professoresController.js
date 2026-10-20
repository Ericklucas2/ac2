let professores = [
  {
    id: 1,
    nome: 'Erick Lucas Oliveira',
    idade: 45,
    departamento: 'Matemática',
    turmas: [
      { codigo: 'MAT101', disciplina: 'Álgebra', alunos: ['Ana', 'Bruno', 'Carla'] }
    ]
  },
  {
    id: 2,
    nome: 'Felipe Silva',
    idade: 38,
    departamento: 'Português',
    turmas: [
      { codigo: 'POR201', disciplina: 'Literatura', alunos: ['Daniel', 'Elisa'] }
    ]
  }
];

exports.listar = (req, res) => {
  res.json(professores);
};

exports.buscarPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const professor = professores.find(p => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }
  res.json(professor);
};

exports.listarTurmas = (req, res) => {
  const id = parseInt(req.params.id);
  const professor = professores.find(p => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }
  res.json(professor.turmas);
};

exports.atualizar = (req, res) => {
  const id = parseInt(req.params.id);
  const professor = professores.find(p => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  const { nome, idade, departamento } = req.body;
  if (nome !== undefined) professor.nome = nome;
  if (idade !== undefined) professor.idade = idade;
  if (departamento !== undefined) professor.departamento = departamento;

  res.json(professor);
};

exports.adicionarTurma = (req, res) => {
  const id = parseInt(req.params.id);
  const professor = professores.find(p => p.id === id);

  if (!professor) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  const { codigo, disciplina, alunos } = req.body;
  const novaTurma = { codigo, disciplina, alunos: alunos || [] };
  professor.turmas.push(novaTurma);

  res.status(201).json(novaTurma);
};

exports.listarPorDepartamento = (req, res) => {
  const departamento = req.params.departamento.toLowerCase();
  const resultado = professores.filter(
    p => p.departamento.toLowerCase() === departamento
  );
  res.json(resultado);
};

exports.remover = (req, res) => {
  const id = parseInt(req.params.id);
  const indice = professores.findIndex(p => p.id === id);

  if (indice === -1) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  const removido = professores.splice(indice, 1)[0];
  res.json({ mensagem: 'Professor removido com sucesso', professor: removido });
};

