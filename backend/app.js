//Overall, this looks like a well-designed and implemented full stack web app using the MERN stack. Great work!
import express from "express";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";
import cors from "cors";
import session from "express-session";
import cardsRouter from "./routes/cards.js";
import usersRouter from "./routes/users.js";
import signuprouter from "./routes/signup.js";
import profilerouter from "./routes/profile.js";
import dotenv from "dotenv";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// setup
const PORT = process.env.PORT || 3001;

const app = express();

dotenv.config();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.use("/", cardsRouter);
app.use("/", usersRouter);
app.use("/", signuprouter);
app.use("/", profilerouter);

app.listen(PORT, () => {
  console.log(`RUN http://localhost:${PORT}`);
});

export default app;
