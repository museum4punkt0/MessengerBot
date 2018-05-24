 // ===== MODULES ===============================================================
import request from 'request';
import express from 'express';
import bodyParser from 'body-parser';

// ===== ROUTES ================================================================
import webhook from './webhook';

const app = express();

app.use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));
