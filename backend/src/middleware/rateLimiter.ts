import { Request, Response, NextFunction } from 'express'
import { RateLimiterMemory } from 'rate-limiter-flexible'

const limiter = new RateLimiterMemory({
    points: 5,
    duration: 60,
    blockDuration: 300,
})

export const loginRateLimitMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip || req.socket.remoteAddress || 'unknown'

    try {
        await limiter.consume(ip)
        next()
    } catch (error: any) {
        res.status(429).json({
            success: false,
            error: 'Too many attempts. Try again in 5 minutes.',
        })
        return
    }
}
