const { Console } = require('console')
const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const mongoose= require ('mongoose')

mongoose.connect('mongodb://localhost:27017/latihan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then (() => {
    console.log('connected')
}).catch((e)=>{
    console.log(e)
    console.log('unconnected')
})

app.use(bodyParser.json({
    extend: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extend: true,
    limit: '20mb'
}))

app.get('/', (req, res)=>{
    res.send('<h1>hello world 1</h1>')

})

app.get('/profile/:username/:id', (req, res)=>{
    console.log(req.params)
    res.send('username = '+ req.params.username)
})
//req params
app.get('/daerah/:daerah', (req, res)=>{
    console.log(req.params)
    res.send('daerah anda = '+ req.params.daerah)
})

//req body
//app.post('/register', (req, res)=> {
//    console.log(req.body)
    //res.json(req.body)
//})
app.use('/user/', require('./routes/User'))

app.listen(3000, () => {
    console.log('server started')
})