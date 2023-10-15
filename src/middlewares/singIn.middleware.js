import express from "express"
import UserController from "../controllers/User.controller.js"
const userController = new UserController()

export const signIn = async (req,res,next) => {
    if (await userController.findUser({email: req.body.email})){
        res.locals = {errorMessages: "Bad User", code: 400, type: "User already exists"}
        next(new Error())

    }
    if (await userController.createUser(req.body)){
        res.status(204).send()
        next()
    }
}

export const findUser = async (req,res,next) => {
    const user = await userController.findUser({email: req.body.email})
    if (user){
        res.status(200).send(user)
        next()
    } 
    else {
        res.locals = {errorMessages: "Not Found", code: 404, type: "User not found"}
        next(new Error())
    }
}