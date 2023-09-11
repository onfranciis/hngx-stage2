import { RequestHandler } from "express";
import User from "../models/User";
import { isValidObjectId } from "mongoose";

const UpdateUser: RequestHandler = async (req, res) => {
  const id = req.params?.id?.trim();
  const newName = req.body.newName.trim();

  try {
    if (!id) {
      res.status(400).json({ message: "No id was specified!" });
    } else if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid Id" });
    } else {
      const targetName = await User.findOne({ name: newName });

      if (targetName) {
        return res.status(409).json({
          message: "This target name already exists",
        });
      } else {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: id },
          { name: newName }
        );

        if (!updatedUser) {
          return res.status(404).json({
            message: "No user was found with this id!",
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
