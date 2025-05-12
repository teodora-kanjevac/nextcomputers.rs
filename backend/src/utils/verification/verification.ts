import prisma from '~/src/utils/prisma'

export const storeVerificationData = async (data: { email: string; token: string; fullname: string }) => {
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 24)

    await prisma.pendingverification.upsert({
        where: { email: data.email },
        update: {
            createdAt: new Date(),
            expiresAt,
        },
        create: {
            email: data.email,
            token: data.token,
            fullname: data.fullname,
            expiresAt,
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
            expiresAt: true,
        },
    })

    if (data && new Date(data.expiresAt) > new Date()) {
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
