const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function getAllUsers() {
    const users = await prisma.user.findMany()
    return users
}

async function getUserPosts(userId) {
    const posts = await prisma.post.findMany({
        where: { userId: userId },
    })
    return posts
}

async function getUserWithProfile(userId) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { profile: true },
    })
    return user
}

async function updatePostContent(postId, newContent) {
    const updatedPost = await prisma.post.update({
        where: { id: postId },
        data: { content: newContent },
    })
    return updatedPost
}

async function deletePost(postId) {
    const deletedComents = await prisma.comment.deleteMany({
        where: {postId: postId}
    })
    
    const deletedPost = await prisma.post.delete({
        where: { id: postId },
    })
    return {deletedPost: deletedPost, deletedComents: deletedComents}
}

module.exports = {getAllUsers, getUserPosts, getUserWithProfile, updatePostContent, deletePost}

