const express = require('express')

const app = express()
const port = 3000

app.use(express.static(`${__dirname}`))

// listen
app.listen(port, () => {
    console.log(`Start : http://localhost:${port}`)
})
