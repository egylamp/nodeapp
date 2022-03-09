import express, {Application, Request, Response} from "express";

const app: Application = express();

// define a port
const PORT = 3003;


app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to express",
  });
});

// start the server
app.listen(PORT, () => {
  console.log("listening to 3003");
});

export default app;
