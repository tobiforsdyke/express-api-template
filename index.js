var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('HELLO FROM EXPRESS!');
});

app.use('/api/todo', todoRoutes);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});