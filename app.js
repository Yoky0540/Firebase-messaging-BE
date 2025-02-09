const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const FirebaseRoute = require('./src/routes/FirebaseRoute');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());
app.use('/api/firebase', FirebaseRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});