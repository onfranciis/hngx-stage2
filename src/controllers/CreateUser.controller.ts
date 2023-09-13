import { RequestHandler } from "express";
import User from "../models/User";

const CreateUser: RequestHandler = async (req, res) => {
  const receivedParam = req.body?.name as string;
  const name = receivedParam?.trim();

  try {
    if (!name) {
      return res.status(400).json({ message: "No name was specified!" });
    } else {
      const existingUser = await User.findOne({ name });

      if (existingUser) {
        return res.status(409).json({
          message: "A user with that name already exists",
        });
      } else {
        const { name: username, _id: id } = await new User({ name }).save();

        return res.json({ name: username, id });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default CreateUser;
