import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const { TokenExpiredError } = jwt as any;

export interface CustomRequest extends Request {
    user?: any;
}

export const authUser = (req: CustomRequest, res: Response, next: NextFunction) => {
    const accessToken = req.cookies?.token;
    const refreshToken = req.cookies?.refreshToken;

    if (!accessToken) {
        return res.status(401).json({ message: 'Unauthorized - No access token provided' });
    }

    try {
        const decodedUser = jwt.verify(accessToken, process.env.JWT_SECRET as string);
        req.user = decodedUser;
        next();
    } catch (err) {
        if (err instanceof TokenExpiredError) {
            if (!refreshToken) {
                return res.status(401).json({ message: 'Unauthorized - No refresh token provided' });
            }

            try {
                const decodedRefresh = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string) as { id: string };
                const newAccessToken = jwt.sign(
                    { id: decodedRefresh.id },
                    process.env.JWT_SECRET as string,
                    { expiresIn: '15m' }
                );
                res.cookie('token', newAccessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'strict',
                    maxAge: 15 * 60 * 1000,
                });
                req.cookies.token = newAccessToken;

                const decodedUser = jwt.verify(newAccessToken, process.env.JWT_SECRET as string);
                req.user = decodedUser;

                next();

            } catch (refreshErr) {
                return res.status(401).json({ message: 'Unauthorized - Invalid refresh token' });
            }

        } else {
            return res.status(401).json({ message: 'Unauthorized - Invalid access token' });
        }
    }
};
