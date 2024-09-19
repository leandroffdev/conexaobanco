<?php 
    try {
        // Cria a conexao
        $conexao = new PDO('mysql:host=localhost;dbname=db_firma', 'root', '');
        // Cria atributo para disparar exceção em caso de erro
        $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // query
        $query = "SELECT * FROM departamento";
        // prepara a query
        $stmt = $conexao->prepare($query);
        // executa a query
        $stmt->execute();
        // pega os dados
        $departamentos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        // Fecha a conexao
        $conexao = null;
        // Mostra os dados
        // var_dump($departamentos);
        foreach ($departamentos as $departamento) {
            echo $departamento['nome'] . "<br>";
        }
    } catch(PDOException $erro) {
        echo "Erro ao conectar ao banco de dados: " . $erro->getMessage();
    }
?>