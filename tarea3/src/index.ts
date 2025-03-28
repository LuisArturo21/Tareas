import express from 'express';
import * as exphbs from 'express-handlebars'; // Correct import
import dotenv from 'dotenv';
import path from 'path';
import router from './routes/app';
import {engine} from 'express-handlebars';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar Handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));

app.use(router);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
