// importando o Router do express

// const Router = require('express').Router;
const { Router } = require('express');
const router = Router();

// ============== ROTAS ===============
// get -> requisitar 
router.get('/atendimentos', (req, res) => {
    res.send('atendimentos get');
});
// post -> Criar 
router.post('/atendimentos', (req, res) => {
    res.send('atendimentos post');
});
// put -> atualizar
router.put('/atendimento/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Estamos atualizando o atendimento ${id}`);
});
// delete -> Deletar
router.delete('/atendimento/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Estamos deletando o atendimento ${id}`);
});

// exportando o router
module.exports = router;