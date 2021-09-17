import { query } from 'express'
import { dbContext } from '../db/DbContext'

class PostsService {
  getPostById() {

  }

  async getAllPosts(query) {
    const posts = await dbContext.Posts.find(query).populate()
    return posts
  }
}
export const postsService = new PostsService()
