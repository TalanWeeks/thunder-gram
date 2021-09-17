import { query } from 'express'
import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class PostsService {
  async getPostById(postId) {
    const post = await dbContext.Posts.findById(postId).populate('creator', 'name picture')
    if (!post) {
      throw new BadRequest('post not found')
    }
    return post
  }

  async getAllPosts(query) {
    const posts = await dbContext.Posts.find(query).populate()
    return posts
  }

  async createPost(postData, UserId) {
    const post = await dbContext.Posts.create(postData)
    if (!UserId) {
      throw new Forbidden('this is not your account')
    }
    return post
  }
}
export const postsService = new PostsService()
