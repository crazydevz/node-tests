const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Mike',
            age: 26
        },
        {
            name: 'John',
            age: 16
        },
        {
            name: 'Alex',
            age: 24
        }
    ]);
});

app.listen(3000);

module.exports = {
    app
}