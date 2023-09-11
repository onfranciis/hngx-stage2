import { RequestHandler } from "express";
import User from "../models/User";
import { isValidObjectId } from "mongoose";

const ReadUser: RequestHandler = async (req, res) => {
  const receivedParam = req.params?.id as string;
  const id = receivedParam?.trim();

  try {
    if (!id) {
      return res.status(400).json({ message: "No id was specified!" });
    } else if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid Id" });
    } else {
      const returnedUser = await User.findById(id);

      if (!returnedUser) {
        return res.status(404).json({
          message: "This user does not exist",
        });
      } else {
        const { name, _id: id } = returnedUser;

        return res.json({ user: name, id });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default ReadUser;
