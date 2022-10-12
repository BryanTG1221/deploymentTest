import {createPool} from 'mysql2/promise';

export const pool = createPool ({
    user: 'root',
    password: '2vlfr0yAexx2nVPSl9gB',
    host: 'containers-us-west-83.railway.app',
    port: 6199,
    database: 'railway'
})
