const express = require('express');
const professoresRoutes = require('./routes/professoresRoutes');

const app = express();
app.use(express.json());

app.use('/professores', professoresRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta: 3000'));