import express from "express";
import cors from "cors";
import { sequelize } from "./server.js";
import "./src/models/Users.js";
import "./src/models/Numeros.js";
import "./src/models/relations.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  }),
);

import userRoutes from "./src/routes/users.routes.js";
import numerosRoutes from "./src/routes/numeros.routes.js";

app.use("/numeros", numerosRoutes);
app.use("/users", userRoutes);

try {
  await sequelize.sync();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
