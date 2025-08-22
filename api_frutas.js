import express from 'express';

const app = express();
const port = 600;

let fruras = ["piña","Kiwi","Zapote","Banano"]

app.get("/", (req, res) => {
    res.send("Bienvenido a la api de frutas")
})

app.get("/frutas", (req, res) => {
    res.json(frutas)
})

//optener una fruta segun su ubicacion en el array
app.get("/fruras/:id",(req,res)=>{
    const id =parseInt(req.params.id);
    frutas[id] ? res.json(frutas[id]) : res.status(404).send("Fruta no encontrada")
})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})