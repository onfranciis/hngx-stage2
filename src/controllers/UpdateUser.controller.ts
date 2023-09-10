import { RequestHandler } from "express";
import User from "../models/User";

const UpdateUser: RequestHandler = async (req, res) => {
  const name = req.body.name.trim();
  const newName = req.body.newName.trim();

  try {
    if (!name) {
      res
        .status(400)
        .json({ message: "", error: "No name was specified!", result: null });
    } else {
      const targetName = await User.findOne({ name: newName });

      if (targetName) {
        return res.status(409).json({
          message: "",
          error: "This target name already exists",
          result: null,
        });
      } else {
        const updatedUser = await User.findOneAndUpdate(
          { name },
          { name: newName }
        );

        if (!updatedUser) {
          return res.status(404).json({
            message: "",
            error: "No user was found with this name!",
            result: null,
          });
        } else {
          const { _id: id } = updatedUser;

          res.json({ name: newName, id });
        }
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "", error: "Something went wrong", result: null });
  }
};

export default UpdateUser;
