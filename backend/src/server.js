// const express = require("express");
// const { config } = require("dotenv");
// const { connectDB, disConnectDB } = require("./config/db.js");


// config();
// connectDB();
// const app = express();

// app.use(express.json()); 
// app.use(express.urlencoded({ extended: true }));


// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log("hi there this server is running ");
// });














// process.on("uncaughtException", async (err) => {
//   console.error("uncaughtException", err);
//   server.close(async () => {
//     await disConnectDB();
//     process.exit(1);
//   });
// });
// process.on("unhandledRejection", async (err) => {
//   console.error("unhandledRejection", err);
//   server.close(async () => {
//     await disConnectDB();
//     process.exit(1);
//   });
// });
// process.on("SIGTERM", async (err) => {
//   console.error("SIGTERM", err);
//   server.close(async () => {
//     await disConnectDB();
//     process.exit(1);
//   });
// });


const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const { connectDB } = require("./config/db.js");
const authRoutes = require("./routes/auth.js");

// INITIALIZE APP & CONFIG
config();
const app = express();
const PORT =  8000;

// CONNECT DATABASE
connectDB();

// MIDDLEWARE
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api/auth", authRoutes);


const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
