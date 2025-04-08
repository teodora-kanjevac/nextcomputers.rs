import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface CustomRequest extends Request {
    user?: any; 
}

export const authUser = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.cookies?.token; 
    if (!token) {
      res.status(401).json({ message: "Unauthorized - No token provided" });
      return;  
    } try {
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET as string);
      req.user = decodedUser;
      next();
    } catch (err) {
      res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
  };

