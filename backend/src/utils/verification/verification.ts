import prisma from '~/src/utils/prisma'

export const storeVerificationData = async (data: { email: string; token: string; fullname: string }) => {
    await prisma.pendingverification.create({
        data: {
            email: data.email,
            token: data.token,
            fullname: data.fullname,
            expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000),
        },
    })
}

export const getVerificationData = async (email: string) => {
    const data = await prisma.pendingverification.findUnique({
        where: { email },
        select: {
            email: true,
            token: true,
            fullname: true,
            expires_at: true,
        },
    })

    if (data && new Date(data.expires_at) > new Date()) {
        return data
    } else if (data) {
        await deleteVerificationData(email)
    }

    return null
}

export const deleteVerificationData = async (email: string) => {
    await prisma.pendingverification.delete({
        where: { email },
    })
}
