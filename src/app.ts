import bodyParser from "body-parser";
import express from "express";
import CreateUser from "./controllers/CreateUser.controller";
import ReadUser from "./controllers/ReadUser.controller";
import UpdateUser from "./controllers/UpdateUser.controller";
import DeleteUser from "./controllers/DeleteUser.controller";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ connected: true });
});

app.post("/api/create/", CreateUser);
app.get("/api/read/:name", ReadUser);
app.patch("/api/update/", UpdateUser);
app.delete("/api/delete/", DeleteUser);

export default app;
