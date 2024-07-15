import Express from "express";

const PORT = 8080;

const app = Express();
app.use(Express.json());

app.listen(PORT, () => {
  console.log(`API rodando na porta: ${PORT}`);
});
