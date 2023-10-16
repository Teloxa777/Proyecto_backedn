import  Express  from "express";

export const errorHandler = async (err, req, res, next) => {
 const {errorMessages, code, type} = res.locals
 errorMessages ? res.send(errorMessages) : res.send()
 code ? res.status(code) : res.status(500)
 type ? console.log(errorMessages + " - " + type) : console.log(errorMessages)
 res.send()
}