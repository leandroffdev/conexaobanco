// Importa o Express
const express = require('express');
const app = express();
const PORT = 3000;
// Importa o router
const router = require('./routes/index');
router(app);

// ============= SERVIDOR =============
app.listen(PORT, (error) => {
    if (error) {
        console.error("Deu um erro: ", error);
        return;
    } else {
        console.log("Servidor rodando na porta: ", PORT);
    };
});