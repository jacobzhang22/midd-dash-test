import { User } from "../../models/User";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(
    "mongodb+srv://midd-dash:midddash23@cluster0.usnrwxk.mongodb.net/midd-dash"
  );
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
