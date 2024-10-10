import { Router } from "express";
import { createCategory, getAllCategory, getOneCategory } from "../controllers/category";


const categoryRouter = Router()
categoryRouter.post('/category',createCategory)
categoryRouter.get('/category',getAllCategory)
categoryRouter.get('/category/:id',getOneCategory)

export default categoryRouter