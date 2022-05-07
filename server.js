const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://ronald:printer2107@cluster0.qwvgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const u = require('url');
const { vary } = require("express/lib/response");

const ObjectId = require('mongodb').ObjectId;
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

        // app.put('/tasks', (req, res) => {
        //     const q = u.parse(req.url, true);
        //     const qdata = q.query;
        //     let query = {_id : ObjectId("626cb311b30d1af3e195fa18")}
        //     console.log(qdata.id)
        //     task.findOneAndUpdate(query, {
        //         $set: {
        //             complete: 6
        //         }
        //     },
        //     {
        //         upsert: true
        //     }).then(result => {
        //         res.json('Success')
        //     }).catch(err => console.error(err))
            
        // });

        // Display information
        

        app.get('/task.ejs', (req, res) => {
            var q = u.parse(req.url, true);
            var qdata = q.query;
            var query = {"_id" : ObjectId(qdata.id)}
            console.log(query)
            db.collection('tasks').find(query).toArray()
            .then(results => {
              res.render('task.ejs', { tasks: results })
            }).catch(error => console.error(error))
            
            app.put('/tasks', (req, res) => {
                var qdata = q.query;
                var query = {"_id" : ObjectId(qdata.id)}
                console.log(query)
                task.findOneAndUpdate(query, {
                    $set: {
                        complete: req.body.complete
                    }
                },
                {
                    upsert: true
                }).then(result => {
                    res.json('Success')
                }).catch(err => console.error(err))
                
            });
            
        })

        
        
    }
).catch(error => console.error(error))

