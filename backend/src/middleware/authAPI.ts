import { Request, Response, NextFunction } from 'express';

const authAPI = (req: Request, res: Response, next: NextFunction) => {

    const { user, password } = req.query as {
        user?: string;
        password?: string;
    };

    if (user === process.env.CATALOG_USER && password === process.env.CATALOG_PASS) {
        return next(); 
    }

    res.status(401).json({ 
        error: 'Unauthorized',
    });
};

export default authAPI;