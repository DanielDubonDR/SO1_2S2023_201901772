import express from "express";
import morgan from "morgan";
import cors from "cors";
import { API_PORT } from "./config/credentials.js";
import handlerTest from "./routes/test.routes.js";
import handlerModules from "./routes/modules.routes.js";
import handler404 from "./routes/404.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(handlerTest);
app.use(handlerModules);
app.use(handler404);

app.listen(API_PORT);
console.log(`Server on port ${API_PORT}`);