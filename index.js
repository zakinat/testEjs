const express =require('express')
const PORT =process.env.PORT || 5000

const app= express()

//static files
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname+ 'public/css'))
app.use('/js', express.static(__dirname+ 'public/js'))


//templating engine
app.set('views', './src/views')
app.set('view engine', 'ejs');


//Routes
const mainPageRouter= require('./src/routes')
app.use('/', mainPageRouter)

//listen on port 
app.listen(PORT, ()=> console.log(`listening on port number: ${PORT}`))