import Express from "express";
import cors from "cors";
import { router } from "./router";
import { errorMiddleware } from "./middleware/error-middleware";
import { corsMiddleware } from "./middleware/cors-middleware";

const PORT = 8080;

const app = Express();
app.use(Express.json());

app.use(corsMiddleware, cors());

app.use(router);

app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log(`API rodando na porta: ${PORT}`);
});
