import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import pug from "pug";
import User from "../mongodb/models/user.js";

async function Profile(req, res) {
  try {
    const verifyToken = () => {
        return new Promise((resolve, reject) => {
     jwt.verify(req.token, process.env.SECRET, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
    }

    const data = await verifyToken();

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const compileFunction = pug.compileFile(
      path.resolve(__dirname, "..", "views", "profile.pug")
    );
    const html = compileFunction({ username: data.username, email: data.email });

    //Function to query the database and return comprehensive user data

    // const existingUser = await User.findOne({ email: data.email });
    // const __dirname = path.dirname(fileURLToPath(import.meta.url));
    // const compileFunction = pug.compileFile(
    //   path.resolve(__dirname, "..", "views", "profile.pug")
    // );

    // const html = compileFunction({
    //   username: existingUser.username,
    //   email: existingUser.email,
    // });

    res.send(html);
    
  } catch (error) {
    console.log(error);
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const compileFunction = pug.compileFile(path.resolve(__dirname, "..", "views", "jwtError.pug"))
    const html = compileFunction()
    res.send(html)
  }
}

export default Profile;
