import db from './db/database.js'
import { app } from './app.js'
import dotenv from 'dotenv';
dotenv.config()

const PORT = Number(process.env.PORT) || 4000;

db.connect()
.then(() => {
    app.listen(PORT, () => {
        console.log('Server is listening at PORT ',PORT);
    })
})