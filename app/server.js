const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');

const api = require("./backend/routes");
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    'success': true
  });
});

//Redirects ./api requests to 'const api' path (declarated line 3)
app.use('/api', api)

const PORT = 3080;
app.listen(PORT);