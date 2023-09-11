import { RequestHandler } from "express";
import User from "../models/User";

const ReadUser: RequestHandler = async (req, res) => {
  const receivedParam = req.query?.name as string;
  const name = receivedParam?.trim();

  try {
    if (!name) {
      return res.status(400).json({ message: "No name was specified!" });
    } else {
      const returnedUser = await User.findOne({ name });

      if (!returnedUser) {
        return res.status(404).json({
          message: "This user does not exist",
        });
      } else {
        const { name: returnedName, _id: id } = returnedUser;

        return res.json({ user: returnedName, id });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default ReadUser;
