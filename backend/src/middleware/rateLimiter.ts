import { Request, Response, NextFunction } from 'express'
import { RateLimiterMemory } from 'rate-limiter-flexible'
import { RATE_LIMIT_CONFIGS, RateLimitType } from '~/src/utils/rateLimitConfig'

const limiters = new Map<RateLimitType, RateLimiterMemory>()

export const rateLimitMiddleware = (type: RateLimitType) => {
    if (!limiters.has(type)) {
        const config = RATE_LIMIT_CONFIGS[type]
        limiters.set(
            type,
            new RateLimiterMemory({
                points: config.points,
                duration: config.duration,
                blockDuration: config.blockDuration,
            })
        )
    }

    return async (req: Request, res: Response, next: NextFunction) => {
        const ip = req.ip || req.socket.remoteAddress || 'unknown'
        const limiter = limiters.get(type)!
        const config = RATE_LIMIT_CONFIGS[type]

        try {
            await limiter.consume(ip)
            next()
        } catch {
            res.status(429).json({
                success: false,
                error: config.errorMessage,
            })
        }
    }
}
