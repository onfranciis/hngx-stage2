import { RequestHandler } from "express";
import User from "../models/User";
import { isValidObjectId } from "mongoose";

const DeleteUser: RequestHandler = async (req, res) => {
  const receivedParam = req.params?.id as string;
  const id = receivedParam?.trim();

  try {
    if (!id) {
      res.status(400).json({ message: "No id was specified!", result: null });
    } else if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid Id" });
    } else {
      const DeletedUser = await User.findByIdAndDelete(id);

      if (!DeletedUser) {
        return res.status(404).json({
          message: "No user was found with this id!",
        });
      } else {
        return res.json({
          message: `${id} has been deleted successfully`,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", result: null });
  }
};

export default DeleteUser;
