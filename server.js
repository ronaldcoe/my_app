const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://ronald:printer2107@cluster0.qwvgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const u = require('url');
MongoClient.connect(url, { useUnifiedTopology: true }).then(
    client => {
        console.log('Connected to database');
        const db = client.db('task_prototype');
        const task = db.collection('tasks');
        app.use(express.static('public'));
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(bodyParser.json());

        

        app.set('view engine', 'ejs');

        app.listen(3000, function() {
            console.log('Listening on 3000')
        });

        app.get('/', (req, res) => {
            db.collection('tasks').find().toArray()
            .then(results => {
              res.render('index.ejs', { tasks: results })
            }).catch(error => console.error(error))
        })
        app.get('/add_task.ejs', (req, res) => {
            res.render('add_task.ejs', {})
            
        });


        app.post('/tasks', (req, res)=>{
            task.insertOne(req.body).then(result => {
                res.redirect('/');
            }).catch(error => console.log(error))
            
        });

        // Display information
        app.get('/task.ejs', (req, res) => {
            db.collection('tasks').find().toArray()
            .then(results => {
              res.render('task.ejs', { tasks: results })
            }).catch(error => console.error(error));
            let q = u.parse(req.url, true).query;
            console.log(q)
        })
        
    }
).catch(error => console.error(error))

