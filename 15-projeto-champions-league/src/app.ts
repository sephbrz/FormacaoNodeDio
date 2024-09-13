import express from "express";
import router from "./routes";
import cors from "cors";

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/1.0", router);
  app.use(cors());

  return app;
}

export default createApp;