import express from "express";
import SignUp from "./controllers/SignUp.js";
import mongoDB from "./mongoDB/connect.js";
import Login from "./controllers/Login.js";
import Profile from "./controllers/Profile.js";
import verifyToken from "./middleware/verifyToken.js";
import ConfirmEmail from "./controllers/ConfirmEmail.js";
import cors from 'cors'

const app = express()
app.use(cors());
app.use(express.json())
app.set('view engine', 'ejs');

mongoDB()

app.get('/', (req, res) => {
    res.send("Hello from Server")
})

app.post("/api/signup", SignUp)
app.post("/api/login", Login)
app.post("/api/profile", verifyToken, Profile)
app.get("/confirm", ConfirmEmail)

export default app