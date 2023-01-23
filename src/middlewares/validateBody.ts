import { Response, Request, NextFunction } from "express";
import { ObjectSchema } from "joi"

export function validateBody(schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => { 
        const {error} = schema.validate(req.body, {abortEarly: false});
        if (error) {
          return res.status(422).send(error.details.map(detail => detail.message));
        }
    
        next();
      }
}