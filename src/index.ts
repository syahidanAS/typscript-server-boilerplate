import http from 'http'
import express, { Express } from 'express'
import morgan from 'morgan'
import routes from './routes/index'
import 'dotenv/config'



const router: Express = express()

// Logging
router.use(morgan('dev'))
// Parse the request
router.use(express.urlencoded({ extended: false }))
// Takes care of JSON data
router.use(express.json())

// Rules of our API
router.use((req, res, next) => {
    //Set CORS Policy
    res.header('Access-Control-Allow-Origin', '*')
    // Set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-with, Content-Type, Accept, Authorization')
    // Set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT')
        return res.status(200).json({})
    }
    next()
})

// Routes
router.use('/', routes)

// Error handling
router.use((req, res, next) => {
    const error = new Error('not found')
    return res.status(404).json({
        message: error.message
    })
})

// Server
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`))