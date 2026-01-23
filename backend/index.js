const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/users", async (req, res) => {
  const data = await prisma.user.findMany();
  res.json(data);ss
});

// Create User Route
app.post("/users", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        nationalId: req.body.nationalId,
        password: req.body.password,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Create post Route
app.get("/post", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});
app.post("/post", async (req, res) => {
  try {
    const post = await prisma.post.create({
      data: {
        postName: req.body.postName,
      },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
