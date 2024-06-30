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
            {
                username: 'allstate',
                email: 'allstaten@email.com',
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
            {
                userId: 3,
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
                userId: 1,
                title: 'I am also a post',
                content: 'Let us get more wild'
            },
            {
                userId: 2,
                title: 'I am a post',
                content: 'Let us get wild',
                published: true
            },
            {
                userId: 2,
                title: 'I am also a post',
                content: 'Let us get more wild'
            },
            {
                userId: 3,
                title: 'I am a post',
                content: 'Let us get wild',
                published: true
            },
            {
                userId: 3,
                title: 'I am also a post',
                content: 'Let us get more wild'
            },
        ],
    })

    console.log(`${createdPosts.count} posts created`, createdPosts)

    const createdComments = await prisma.comment.createMany({
        data: [
            {
                userId: 2,
                postId: 1,
                content: 'I am a Comment'
            },
            {
                userId: 3,
                postId: 3,
                content: 'I am a Comment',
            },
            {
                userId: 1,
                postId: 5,
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
