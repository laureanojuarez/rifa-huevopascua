import express from "express";
import { sequelize } from "./server.js";
import "./src/models/Users.js";

const app = express();
const port = 3000;

app.use(express.json());

import userRoutes from "./src/routes/users.routes.js";
app.use("/users", userRoutes);

try {
  await sequelize.sync();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
