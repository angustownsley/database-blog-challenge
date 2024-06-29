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

    console.log(`${createdProfiles.count} profiles created`, createdProfiles)


    const createdPosts = await prisma.post.createMany({
        data: [
            {
                userId: 1,
                title: 'I am a post',
                content: 'Let us get wild'
            },
            {
                userId: 2,
                title: 'I am a post',
                content: 'Let us get wild',
                published: true
            },
        ],
    })

    console.log(`${createdPosts.count} posts created`, createdPosts)

    const createdComments = await prisma.comment.createMany({
        data: [
            {
                userId: 2,
                postId: 1,
                content: 'Let us get wild'
            },
            {
                userId: 1,
                postId: 2,
                content: 'I am a Comment',
            },
        ],
    })

    console.log(`${createdComments.count} comments created`, createdComments)
    // Don't edit any of the code below this line
    process.exit(0)
}

seed().catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
})
