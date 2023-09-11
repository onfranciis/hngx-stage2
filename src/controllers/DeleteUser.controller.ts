import { RequestHandler } from "express";
import User from "../models/User";

const DeleteUser: RequestHandler = async (req, res) => {
  const receivedParam = req.query?.name as string;
  const name = receivedParam?.trim();

  try {
    if (!name) {
      res.status(400).json({ message: "No name was specified!", result: null });
    } else {
      const DeletedUser = await User.findOneAndDelete({ name });

      if (!DeletedUser) {
        return res.status(404).json({
          message: "No user was found with this name!",
        });
      } else {
        return res.json({
          message: `${name} has been deleted successfully`,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", result: null });
  }
};

export default DeleteUser;
