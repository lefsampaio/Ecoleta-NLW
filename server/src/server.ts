import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

// request body: parametros para criação/ atualizacao de informações
//query param: parametros opcionais que servem pra filtrar ou fazer paginação
//request params: parametros que vem na propria rota que identificam um recurso
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);