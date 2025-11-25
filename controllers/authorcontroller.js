
const prisma = new PrismaClient();

exports.getAuthors = async (req, res) => {
    try {
        const authors = await prisma.author.findMany();
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch authors" });
    }
};

exports.createAuthor = async (req, res) => {
    const { name, bio, birthdate } = req.body;
    try {
        const newAuthor = await prisma.author.create({
            data: { name, bio, birthdate },
        });
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({ error: "Failed to create author" });
    }
};