import express from 'express'

const app = express()
app.use(express.json())

const port = 3000

// Array de datos iniciales
const prendas = [
    { id: 1, name: 'Blusas' },
    { id: 2, name: 'Pantalones' },
    { id: 3, name: 'Bodys' },
    { id: 4, name: 'Camisas juveniles' }
]


app.get("/", (req, res) => {
    res.send("Bienvenido a la API de prendas")
})


app.get("/prendas", (req, res) => {
    res.json(prendas)
})


app.get("/prendas/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const prenda = prendas.find(p => p.id === id)
    if (!prenda) {
        res.status(404).send("Prenda no encontrada")
    } else {
        res.json(prenda)
    }
})


app.post("/prendas", (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(400).send("Debes enviar el nombre de la prenda en la propiedad 'name'")
    } else {
        const nuevaPrenda = {
            id: prendas.length + 1,
            name: name
        }
        prendas.push(nuevaPrenda)
        res.status(201).json(nuevaPrenda)
    }
})

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
})