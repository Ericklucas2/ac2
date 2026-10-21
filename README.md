# API de Gerenciamento de Professores

API REST desenvolvida com Node.js e Express para gerenciar os professores de uma escola, incluindo suas informações pessoais e as turmas que ministram. Os dados são armazenados em memória (arrays e objetos JavaScript), sem uso de banco de dados.

**Autor:** Erick Lucas Oliveira

## Tecnologias

- Node.js
- Express

## Estrutura do projeto

```
projeto/
├── app.js
├── routes/
│   └── professoresRoutes.js
├── controllers/
│   └── professoresController.js
├── prints/
├── package.json
└── README.md
```

## Como executar

1. Clone o repositório:
```
   git clone <https://github.com/Ericklucas2/ac2.git>
```
2. Acesse a pasta do projeto:
```
   cd pastaexercicio
```
3. Instale as dependências:
```
   npm install
```
4. Inicie o servidor:
```
   node app.js
```
5. A API estará disponível em `http://localhost:3000`.

## Estrutura de um professor

```json
{
  "id": 1,
  "nome": "Erick Lucas Oliveira",
  "idade": 45,
  "departamento": "Matemática",
  "turmas": [
    {
      "codigo": "MAT101",
      "disciplina": "Álgebra",
      "alunos": ["Ana", "Bruno", "Carla"]
    }
  ]
}
```

## Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/professores` | Lista todos os professores |
| GET | `/professores/:id` | Busca um professor por ID |
| GET | `/professores/:id/turmas` | Lista as turmas de um professor |
| GET | `/professores/departamento/:departamento` | Lista professores por departamento |
| PUT | `/professores/:id` | Atualiza os dados de um professor |
| POST | `/professores/:id/turmas` | Adiciona uma turma a um professor |
| DELETE | `/professores/:id` | Remove um professor |

Nas operações de busca, atualização e exclusão, se o ID informado não existir, a API retorna status `404` com a mensagem:

```json
{ "mensagem": "Id não existente" }
```

## Exemplos de requisições

**Atualizar professor (PUT `/professores/1`)**
```json
{
  "nome": "Erick Lucas Oliveira",
  "idade": 46
}
```

**Adicionar turma (POST `/professores/1/turmas`)**
```json
{
  "codigo": "MAT102",
  "disciplina": "Geometria",
  "alunos": ["Fábio", "Gina"]
}
```

## Observações

- Os dados ficam armazenados apenas em memória: as alterações permanecem enquanto a aplicação estiver em execução e voltam ao estado inicial ao reiniciar o servidor.
- As capturas de tela dos testes feitos no Postman/Thunder Client estão na pasta `prints/`.