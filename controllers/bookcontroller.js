
const prisma = new PrismaClient();

exports.getBooks = async (req, res) => {
    try {
        const books = await prisma.book.findMany();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
};

exports.createBook = async (req, res) => {
    const { title, author, summary, genre, ISBN, url } = req.body;
    try {
        const newBook = await prisma.book.create({
            data: { title, author, summary, genre, ISBN, url },
        });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: "Failed to create book" });
    }
};