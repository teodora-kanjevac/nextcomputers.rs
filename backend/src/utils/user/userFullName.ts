import prisma from '~/src/utils/prisma';

export const fetchUsersFullNames = async (userIds: string[]): Promise<Record<number, { firstName: string; lastName: string }>> => {
    if (userIds.length === 0) return {};

    const users = await prisma.user.findMany({
        where: {
            user_id: { in: userIds },
        },
        select: {
            user_id: true,
            first_name: true,
            last_name: true,
        },
    });

    return users.reduce((acc, user) => {
        acc[user.user_id] = { firstName: user.first_name, lastName: user.last_name };
        return acc;
    }, {} as Record<number, { firstName: string; lastName: string }>);
};
