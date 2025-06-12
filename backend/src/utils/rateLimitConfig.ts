export const RATE_LIMIT_CONFIGS = {
    LOGIN: {
        points: 5,
        duration: 300,
        blockDuration: 1800,
        errorMessage: 'Too many attempts. Try again in 5 minutes.',
    },
    REGISTER: {
        points: 5,
        duration: 86400,
        blockDuration: 0,
        errorMessage: 'Maximum 5 registrations per day.',
    },
    FORGOT_PASSWORD: {
        points: 3,
        duration: 3600,
        blockDuration: 7200,
        errorMessage: 'Too many password reset requests. Try again in 30 minutes.',
    },
    EMAIL_VERIFICATION: {
        points: 5,
        duration: 3600,
        blockDuration: 0,
        errorMessage: 'Too many verification attempts. Try again later.',
    },
    CONTACT_FORM: {
        points: 3,
        duration: 86400,
        blockDuration: 0,
        errorMessage: 'Maximum 3 submissions per day.',
    },
    API_GET_REQUESTS: {
        points: 300,
        duration: 10,
        blockDuration: 60,
        errorMessage: 'Too many requests. Try again a minute.',
    },
    API_POST_REQUESTS: {
        points: 100,
        duration: 10,
        blockDuration: 120,
        errorMessage: 'Too many requests. Try again in 2 minutes.',
    },
    PRIVATE_API_REQUESTS: {
        points: 50,
        duration: 10,
        blockDuration: 30,
        errorMessage: 'Too many requests. Try again in 30 seconds.',
    },
} as const

export type RateLimitType = keyof typeof RATE_LIMIT_CONFIGS
