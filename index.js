const express = require('express');

const app = express();

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query params
// Route params
// Body

app.get('/', (request, response) => {
    return response.json({
        message: 'API Omnistack'
    });
});

app.listen(3333);