import express from "express"

const app = express();

app.use(express.json());

let jogos = [
    {id: 1, nome: "fornite", empresa: "epicgaymes"},
    {id: 2, nome: "fornite 2", empresa: "microsoft"},
    {id: 3, nome: "fornite 3", empresa: "mojang"}
];

app.get('/jogos/:id', (req, res)=>{
    const idUrl = Number(req.params.id);
    const jogo = jogos.find((jogo) => {
        return jogo.id === idUrl;
    });
    res.json(jogo);
});


app.listen(4000, ()=>{
    console.log("rodano");
}); 


