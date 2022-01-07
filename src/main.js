const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { selectAllMessege, addMsg } = require("./user");

app.get("/users", async (req, res) => {
  const list = await selectAllMessege();
  res.json(list);
});

app.post("/add-msg", async (req, res) => {
  const list = req.body;
  await addMsg(list);
  res.json({ messege: "msg added" });
});

app.listen(4000, () => console.log("server started!"));
