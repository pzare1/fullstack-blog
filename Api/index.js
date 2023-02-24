import express from "express";
import routerPosts from "./routes/posts.js";
import routerAuth from "./routes/posts.js";
import routerUser from "./routes/posts.js";

const app = express();
app.use(express.json())
app.use("/api/posts",routerPosts)
app.use("/api/auth",routerAuth)
app.use("/api/user",routerUser)
app.listen(8000, () => {
    console.log('conneted')
})