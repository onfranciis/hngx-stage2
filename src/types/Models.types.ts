import { Date, Document } from "mongoose";

export interface User extends Document {
  name: string;
}

export interface TypedRequestBody<T> extends Express.Request {
  body: T;
}
