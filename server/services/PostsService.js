import { query } from 'express'
import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class PostsService {
  async getPostById(postId) {
    const post = await dbContext.Posts.findById(postId).populate('creator')
    if (!post) {
      throw new BadRequest('post not found')
    }
    return post
  }

  async getAllPosts(query) {
    const posts = await dbContext.Posts.find(query)
    return posts
  }

  async createPost(postData) {
    const post = await dbContext.Posts.create(postData)
    return post
  }

  async editPost(postId, userId, postData) {
    const post = await this.getPostById(postId)
    if (userId !== post.creatorId.toString()) {
      throw new Forbidden('you cannot edit this post')
    }
    post.title = postData.title || post.title
    post.img = postData.img || post.img
    post.description = postData.description || post.description
    await post.save()
    return post
  }
}
export const postsService = new PostsService()
