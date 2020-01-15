const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://api_backend:P@ssw0rd@cluster0-rsfl1.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Configuração para o express entender json em todas as rotas
app.use(express.json());

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query params: request.query (filtros, ordenação, paginação, ...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.get('/', (request, response) => {
    return response.json({
        message: 'API Omnistack'
    });
});

app.listen(3333);