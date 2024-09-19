import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function createAndFillUserTable(name, lastname) {
    const db = await open({
        filename: './banco.db',
        driver: sqlite3.Database,
    });
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INT PRIMARY KEY,
        name VARCHAR(30),
        lastname VARCHAR(30)
    )`);
    // db.run(`INSERT INTO usuarios (name, lastname) VALUES ( ?, ? )`, [name, lastname]);
    db.run(``);
}
// createAndFillUserTable();
createAndFillUserTable('Leandro', 'França');
createAndFillUserTable('Isabelle', 'França');
createAndFillUserTable('Alice', 'França');
