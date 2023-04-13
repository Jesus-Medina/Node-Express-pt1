const { Pool } = require("pg")

const credenciales = {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "likeme",
    port: "5432",
    allowExitOnIdle: true
}

const clienteDB = new Pool(credenciales)

const getDate = async () => {
    const resultado = await clienteDB.query("SELECT NOW()")
    console.log(resultado)
}

const verPosts = async () => {
    const consulta = "SELECT * FROM posts"
    const respuesta = await clienteDB.query(consulta)
    console.log(respuesta)
    return respuesta
}

const crearPost = async (titulo, url, descripcion, likes = 0) => {
    const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)"
    const values = [titulo, url, descripcion, likes]
    const respuesta = await clienteDB.query(consulta, values)
    console.log(respuesta)
    return respuesta
}

module.exports = { getDate, verPosts, crearPost }


