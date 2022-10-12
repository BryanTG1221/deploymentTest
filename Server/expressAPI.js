import express from 'express';
import {pool} from './conectionDB.js';

const app = express();

app.get('/', async (req, res) => {
    const [resultado] = await pool.query(`SELECT * FROM testTable`);
    console.log(resultado);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

// Language: javascript with NODEJS