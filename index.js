const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const logReqRes = require("./middlewares");
const connectDB = require("./connection");
const PORT = 8000;
const DB_URL = "mongodb://localhost:27017/express-mongo-crud"; 
connectDB(DB_URL);
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use((req, res, next) => {
  res.setHeader("X-Custom-Created-Header", "for testing purposes");
  next();
});

app.use(logReqRes("logs.txt"));
app.use("/api/users", userRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
