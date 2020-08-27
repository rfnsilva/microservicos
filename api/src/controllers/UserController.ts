import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from "../entity/User";

export const register = async (req: Request, res: Response) => {
    
    const { nome, email, senha } = req.body;

    try {
        

    } catch (error) {
        return res.status(402).json({message: "erro user controller"})
    }
}

export const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;
    
    try {

    } catch (err) {
        return res.status(402).json({message: "erro user controller"})
    }
}



//get_user
export const get_user = async(req: Request, res: Response) => {
    try {
  
    } catch (error) {
        return res.status(404).json({ message: 'erro ao pegar user' })
    }
}
