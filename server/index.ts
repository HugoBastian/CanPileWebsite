import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes";

const app = express();
const PORT = process.env.BACKEND_PORT || 3001;

app.use(cors());
app.use(express.json());

async function start() {
  const httpServer = await registerRoutes(app);
  
  httpServer.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
