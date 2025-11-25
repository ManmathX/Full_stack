const express = require('express');
const { PrismaClient } = require('@prisma/client');



const app = express();
const prisma = new PrismaClient();

app.use(express.json());



app.get("/api/books", async (req, res) => {
    const books = await prisma.book.findMany();
    res.json(books);
});

app.post("/api/books", async (req, res) => {
    const { title, author, summary, genre, ISBN, url } = req.body;
    const newBook = await prisma.book.create({
        data: { title, author, summary, genre, ISBN, url },
    });
    res.status(201).json(newBook);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 


