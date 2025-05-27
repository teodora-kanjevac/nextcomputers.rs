import { Request, Response, NextFunction } from 'express';
import jwt, { TokenExpiredError, JwtPayload } from 'jsonwebtoken';

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
                const decodedRefresh = jwt.verify(refreshToken, process.env.REFRESH_SECRET as string) as { id: string };
                const newAccessToken = jwt.sign(
                    { userId: decodedRefresh.id },
                    process.env.JWT_SECRET as string,
                    { expiresIn: '15m' }
                );
                res.cookie('token', newAccessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'strict',
                    maxAge: 15 * 60 * 1000,
                });
                req.user = decodedRefresh;
                next();

            } catch (refreshErr) {
                return res.status(401).json({ message: 'Unauthorized - Invalid refresh token' });
            }

        } else {
            return res.status(401).json({ message: 'Unauthorized - Invalid access token' });
        }
    }
};
