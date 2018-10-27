
const http = require('http')
const express = require('express')
const path = require('path')
const FoxRouter = require('fox-wamp')

const PORT = process.env.PORT || 5000

let app = express()

app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))

let httpServer = http.createServer(app)
httpServer.listen(PORT, () => console.log(`Listening on ${ PORT }`))

router = new FoxRouter()
router.listenWAMP({server: httpServer, path: "/wss"})
