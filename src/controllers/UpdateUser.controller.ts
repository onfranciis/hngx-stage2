import { RequestHandler } from "express";
import User from "../models/User";

const UpdateUser: RequestHandler = async (req, res) => {
  const name = req.body.name.trim();
  const newName = req.body.newName.trim();

  try {
    if (!name) {
      res.status(400).json({ message: "No name was specified!" });
    } else {
      const targetName = await User.findOne({ name: newName });

      if (targetName) {
        return res.status(409).json({
          message: "This target name already exists",
        });
      } else {
        const updatedUser = await User.findOneAndUpdate(
          { name },
          { name: newName }
        );

        if (!updatedUser) {
          return res.status(404).json({
            message: "No user was found with this name!",
          });
        } else {
          const { _id: id } = updatedUser;

          res.json({ name: newName, id });
        }
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default UpdateUser;
