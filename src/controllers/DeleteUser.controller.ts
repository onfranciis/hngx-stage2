import { RequestHandler } from "express";
import User from "../models/User";

const DeleteUser: RequestHandler = async (req, res) => {
  const name = req.body.name.trim();

  try {
    if (!name) {
      res
        .status(400)
        .json({ message: "", error: "No name was specified!", result: null });
    } else {
      const DeletedUser = await User.findOneAndDelete({ name });

      if (!DeletedUser) {
        return res.status(404).json({
          message: "",
          error: "No user was found with this name!",
          result: null,
        });
      } else {
        return res.json({
          message: `${name} has been deleted successfully`,
          error: null,
          result: null,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "", error: "Something went wrong", result: null });
  }
};

export default DeleteUser;
