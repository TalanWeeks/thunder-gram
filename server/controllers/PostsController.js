import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from '../services/PostsService'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAllPosts)
      .get('/:postId', this.getPostById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPosts)
  }

  async getAllPosts(req, res, next) {
    try {
      const posts = await postsService.getAllPosts()
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async getPostById(req, res, next) {
    try {
      const post = await postsService.getPostById(req.params.postId)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async createPosts(req, res, next) {
    try {
      // !never trust the client
      req.body.id = req.params.id
      const post = await postsService.createPost(req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }
}
