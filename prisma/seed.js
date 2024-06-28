const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {
    const createdUsers = await prisma.user.createMany({
        data: [
            {
                username: 'alicemart',
                email: 'alicemartin@email.com',
                password: 'insecure',
            },
            {
                username: 'allymartin',
                email: 'allymartin@email.com',
                password: 'insecure',
            },
        ],
    })

    console.log(`${createdUsers.count} users created`, createdUsers)

    // Add your code here
    const createdProfiles = await prisma.profile.createMany({
        data: [
            {
                userId: 1,
                bio: 'I am a user',
            },
            {
                userId: 2,
                bio: 'I am a user',
            },
        ],
    })

    console.log(`${createdProfiles.count} users created`, createdProfiles)
    // Don't edit any of the code below this line
    process.exit(0)
}

seed().catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
})
