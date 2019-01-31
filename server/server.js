import express from 'express';
import morgan from 'morgan';
import debug from 'debug';
import bodyParser from 'body-parser';

const port = process.env.PORT || 3000;
const log = debug('app');
const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  log(`App is live on port: ${port}`);
});
