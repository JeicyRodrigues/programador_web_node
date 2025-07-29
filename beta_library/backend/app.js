import express from 'express'
import routerLivros from './routes/livrosRouters.js'


const app = express()
app.use(express.json())

const port = 3000


// Montagem da Rota Livro 

app.use('/livros', routerLivros);



app.listen(port, () => {
   console.log(`Escutando a porta ${port}`)
})