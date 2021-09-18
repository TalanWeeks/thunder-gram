import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentsService } from '../services/CommentsService'
import BaseController from '../utils/BaseController'

export class CommentsController extends BaseController {
  constructor() {
    super('api/thundergram/posts/comments')
    this.router
      .get('', this.getComments)
      .get('/:commentId', this.getComment)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComment)
      .delete('/:commentId', this.removeComment)
      .put('/:commentId', this.editComment)
  }

  async getComments(req, res, next) {
    try {
      const comments = await commentsService.getComments(req.query)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async getComment(req, res, next) {
    try {
      const comment = await commentsService.getCommentById(req.params.commentId)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async removeComment(req, res, next) {
    try {
      const comment = await commentsService.removeComment(req.params.commentId, req.userInfo.id)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async editComment(req, res, next) {
    try {
      const comment = await commentsService.editComment(req.params.commentId, req.userInfo.id, req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async createComment(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await commentsService.createComment(req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
}
