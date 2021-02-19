
const http = require('http')
const express = require('express')
const debug = require('debug')('chat')
const socketio = require('socket.io')

const path = require('path')

const port = 3000
const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname,'public')))

var messages = []; 
// socket.io

io.on('connect',socket => {
    debug(`conncected ${socket.id}`)



    socket.emit('messages', messages); 
    socket.on('new-message', function(data) { 
        messages.push(data); 
        io.sockets.emit('messages', messages); 
    }); 



})


    

//



//errores
function handleFatalError(err){
    console.error(`Fatal error ${err.message}`)
    console.error(err.stack)
    process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandleRejection', handleFatalError)

//



server.listen(port,() =>{
    console.log('listening on port 3000')
})
