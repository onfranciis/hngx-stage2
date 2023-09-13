import { RequestHandler } from "express";
import User from "../models/User";
import { isValidObjectId } from "mongoose";

const ShowAllUsers: RequestHandler = async (req, res) => {
  try {
    const users = await User.find().exec();

    const updatedUsers = users.map((item) => {
      const { name, _id: id } = item;
      return { user: name, id };
    });

    return res.json({ users: updatedUsers });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default ShowAllUsers;
