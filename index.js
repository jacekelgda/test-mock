const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data)
    res.send(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))