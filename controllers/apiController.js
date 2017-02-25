var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    //find Todos for a username
    app.get('/api/todo/:uname', function (req, res) {

        Todos.find({
            username: req.params.uname
        }, function (err, todos) {
            if (err) throw err;
            res.send(todos);
        });
    });

    //find Todos by ID
    app.get('/api/todo/:id', function (req, res) {

        Todos.findById({
            _id: req.params.id
        }, function (err, todos) {
            if (err) throw err;
            res.send(todos);
        });
    });

    //find Todos by ID
    app.post('/api/todo', function (req, res) {

        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function (err, todo) {
                if (err) throw err;
                res.send('Success');
            });
        } else {
            var newTodo = Todos({
                username: req.body.username,
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function (err) {
                if (err) throw err;
                res.send('Success');
            });
        }
    });

//routing for delete http method
    app.delete('/api/todo', function (req, res) {
        Todos.findByIdAndRemove(req.body.id, function (err) {
            if (err) throw err;
            res.send('Success');
        });
    });
};
