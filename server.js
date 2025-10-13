import express from "express";
import cors from 'cors'
import { PrismaClient } from './src/generated/prisma/index.js'


// Prisma 
const prisma = new PrismaClient();

// Express init and configs
const app = express();
app.use(express.json());
app.listen(3000)

//cors config
const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

// Rota para adicionar novo item a lista
app.post('/add', async (req, res) => {
    await prisma.list.create({
        data: {
            mal_id: req.body.mal_id,
            title: req.body.title,
            image: req.body.image,
            favorite: req.body.favorite,
            watched: req.body.watched,
            see_later: req.body.see_later
        }
    })

    res.status(201).json(req.body);
})

app.get('/allList', async (req, res) => {
    const allList = await prisma.list.findMany()
    res.status(201).json(allList);
})


// Inicio Rotas "Favorites" ----------------------------
// Rota para pegar favoritos da lista
app.get('/favorites', async (req, res) => {
    const favorites = await prisma.list.findMany({
        where: {
            favorite: true
        }
    });
    res.status(200).json(favorites);
})


// Rota para editar favorito da lista
app.put('/favorite/:id', async (req, res) => {
    await prisma.list.update({
        where: {
            id: req.params.id
        },
        data: {
            favorite: req.body.favorite
        }
    });

    res.status(200).json(req.body);
})

// Fim Rotas "Favorite" ---------------------------------------
// Inicio Rotas "Watched" -------------------------------
// Rota para pegar marcados como assistido da lista
app.get('/watcheds', async (req, res) => {
    const watcheds = await prisma.list.findMany({
        where: {
            watched: true
        }
    });
    res.status(201).json(watcheds);
})


// Rota para editar assistidos da lista
app.put('/watched/:id', async (req, res) => {
    await prisma.list.update({
        where: {
            id: req.params.id
        },
        data: {
            watched: req.body.watched
        }
    });
    res.status(200).json(req.body);
})

//Fim Rotas "Watched" -------------------------------
//Inicio Rotas "See later" --------------------------
//Rota para pegar Ver depois na lista
app.get('/seeLater', async (req, res) => {
    const seeLater = await prisma.list.findMany({
        where: {
            see_later: true
        }
    });
    res.status(201).json(seeLater);
})


// Rota para editar ver depois na lista
app.put('/seeLater/:id', async (req, res) => {
    await prisma.list.update({
        where: {
            id: req.params.id
        },
        data: {
            see_later: req.body.see_later
        }
    })
})
//Fim Rotas "See later" --------------------