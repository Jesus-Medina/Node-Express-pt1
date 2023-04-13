const { verPosts, crearPost } = require("./consultas.js")
const cors = require("cors")
const express = require("express")
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.listen(port, () => {
    console.log(`Server listen on port http://localhost:${port}`)
})

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.get("/posts", async (req, res) => {
    const { rows } = await verPosts()
    res.json(rows)
})

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body
    console.log(req.body)
    const resultado = await crearPost(titulo, url, descripcion)
    res.send([])
})