const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (_, res) => {
  const count = await prisma.user.count();
  res.send(count > 0 ? `Users count: ${count}` : "No users yet");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
