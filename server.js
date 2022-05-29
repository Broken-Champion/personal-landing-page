//loading express.
const express = require('express');
//loading body-parser.
const bodyParser = require('body-parser');

//starting a new instance of the app.
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));

const port = 8000;

const server = app.listen(port, listening);

function listening() {
    console.log('listening on port ' + port);
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

const data = [];
app.post('/', (req, res) => {
    console.log(req.body);
    data.push(req.body);
});


