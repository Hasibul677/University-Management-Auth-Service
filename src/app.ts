import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

// import all the route 



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))



export default app;