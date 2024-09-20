class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }
    criarTabelaAtendimentos() {
        const sql = `
        CREATE TABLE IF NOT EXISTS atendimentos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        data DATE NOT NULL,
        service VARCHAR(100),
        cliente VARCHAR(100),
        status ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo");`;
    this.conexao.query(sql, (erro, resultados) => {
        if (erro) {
            console.error("Erro ao tentar criar a tabela", erro.message());
            return;
        } else {
            console.log("Tabela criada com sucesso!");
        }
    })};
}

module.exports = new Tabelas();