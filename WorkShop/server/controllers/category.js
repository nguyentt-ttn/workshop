import Category from "../models/category"

export const createCategory = async(req,res)=>{
    try {
        const category = await Category.create(req.body)
        return res.json(category)
    } catch (error) {
        console.log(error)
    }
}
export const getAllCategory = async(req,res)=>{
    try {
        const categories = await Category.find()
        return res.json(categories)
    } catch (error) {
        console.log(error)
    }
}
export const getOneCategory = async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id)
        return res.json(category)
    } catch (error) {
        console.log(error)
    }
}