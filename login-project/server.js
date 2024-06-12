const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cors = require('cors'); // Adicione esta linha
const app = express();
const port = 3000;

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'roundhouse.proxy.rlwy.net',
    user: 'root',
    password: 'dhuJYWsKfFxvJNYVzxFfSJQDNHBZfmNN',
    database: 'railway',
    port: 36373
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Middleware
app.use(cors()); // Adicione esta linha
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// Rotas
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query('INSERT INTO Usuarios (username, password) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
        if (err) {
            console.error('Erro ao inserir usuário:', err);
            res.status(500).send('Erro ao registrar usuário');
            return;
        }
        res.status(200).send('Usuário registrado com sucesso');
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM Usuarios WHERE username = ?', [username], async (err, results) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            res.status(500).send('Erro ao realizar login');
            return;
        }

        if (results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
            res.status(401).send('Usuário ou senha incorretos');
            return;
        }

        req.session.user = results[0];
        res.status(200).send('Login realizado com sucesso');
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em https://paws-safety2.vercel.app`);
});
