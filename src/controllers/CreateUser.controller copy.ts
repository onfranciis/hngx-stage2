import { RequestHandler } from "express";
import User from "../models/User";

const CreateUser: RequestHandler = async (req, res) => {
  const name = req.body.name.trim();

  try {
    if (!name) {
      res
        .status(400)
        .json({ message: "", error: "No name was specified!", result: null });
    } else {
      const existingUser = await User.findOne({ name });

      if (existingUser) {
        return res.status(409).json({
          message: "",
          error: "A user with that name already exists",
          result: null,
        });
      }

      const { name: username, _id: id } = await new User({ name }).save();

      res.json({ name: username, id });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "", error: "Something went wrong", result: null });
  }
};

export default CreateUser;
