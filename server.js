
const http = require('http')
const express = require('express')
const debug = require('debug')('chat')

const path = require('path')

const port = 3000
const app = express()
const server = http.createServer(app)

app.use(express.static(path.join(__dirname,'public')))


//errores
function handleFatalError(err){
    console.error('Fatal error ${err.message}')
    console.error(err.stack)
    process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandleRejection', handleFatalError)



//
server.listen(port,() =>{
    console.log('listening on port 3000')
})
