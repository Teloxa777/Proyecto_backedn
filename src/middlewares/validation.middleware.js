import express from "express";


export const validation = (schema) => 
    (req, res, next) => {
        if (schema){
            const { error } = schema.validate(req.body);
            if (error) {
                const errorMessages = error.details.map((err) => err.message);
                res.locals.errorMessages = errorMessages;
                res.locals.code = 400;
                res.locals.type = "validation";
                next();
            } else {
                next();
            }
        }
    }