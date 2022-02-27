const express = require('express');
const cors = require('./cors.js');

const app = express();
const port = 3000;

app.use(express.json());

const route = require('./routes/route.js');
app.use('',route);

cors(app);

app.listen(port, ()=>(console.log(`App runing in http://localhost:${port}`)));

