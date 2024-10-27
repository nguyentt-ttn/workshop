import express from 'express'
import cors  from 'cors';
import productRouter from './routers/product';
import { connectDB } from './config/db';
import authRouter from './routers/auth';
import categoryRouter from './routers/category';
import morgan from 'morgan';
import 'dotenv/config';

const app = express()
app.use(cors());
app.use(morgan("dev"))
app.use(express.json())

//routers
app.use("/api",productRouter)
app.use("/api",authRouter)
app.use("/api",categoryRouter)


connectDB()
export const viteNodeApp = app;