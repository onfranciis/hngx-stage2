import { RequestHandler } from "express";
import User from "../models/User";

const ReadUser: RequestHandler = async (req, res) => {
  const name = req.params.name.trim();

  try {
    if (!name) {
      res
        .status(400)
        .json({ message: "", error: "No name was specified!", result: null });
    } else {
      const returnedUser = await User.findOne({ name });

      if (!returnedUser) {
        return res.status(404).json({
          message: "",
          error: "This user does not exist",
          result: null,
        });
      } else {
        const { name: returnedName, _id: id } = returnedUser;

        res.json({ user: returnedName, id });
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "", error: "Something went wrong", result: null });
  }
};

export default ReadUser;
