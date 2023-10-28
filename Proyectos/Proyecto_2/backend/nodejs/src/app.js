import express from "express";
import morgan from "morgan";
import cors from "cors";
import handlerTest from "./routes/test.routes.js";
import handlerEstadistics from "./routes/estadisticas.routes.js";
import handler404 from "./routes/404.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(handlerTest);
app.use("/estadisticas",handlerEstadistics);
app.use(handler404);

export default app;