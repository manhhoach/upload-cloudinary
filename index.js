const express = require('express')
const app = express()
const port = 3000
const { upload_array, upload_single } = require('./uploads')


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/upload', upload_single, async (req, res) => {
    try {
        res.json({
            data: req.file
        })
    }
    catch (err) {
        console.log(err)
    }
})

app.post('/uploads', upload_array, async (req, res) => {
    try {
        res.json({
            data: req.files
        })
    }
    catch (err) {
        console.log(err)
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})