import bodyParser from "body-parser";
import express from "express";
import CreateUser from "./controllers/CreateUser.controller";
import ReadUser from "./controllers/ReadUser.controller";
import UpdateUser from "./controllers/UpdateUser.controller";
import DeleteUser from "./controllers/DeleteUser.controller";
import ShowAllUsers from "./controllers/ShowAllUsers.controller";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ connected: true });
});

app.post("/api/", CreateUser);
app.get("/api/", ShowAllUsers);
app.get("/api/:id", ReadUser);
app.patch("/api/:id", UpdateUser);
app.delete("/api/:id", DeleteUser);

app.all("*", (req, res) => {
  res.status(404).json({
    message: "The route you just attempted is not supported!",
  });
});

export default app;
