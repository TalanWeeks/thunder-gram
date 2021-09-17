import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class CommentsService {
  async getCommentById(commentId) {
    const comment = await dbContext.Comments.findById(commentId).populate('creator', 'name picture')
    if (!comment) {
      throw new BadRequest('Invalid comment Id')
    }
    return comment
  }

  async editComment(commentId, userId, commentData) {
    return await dbContext.Comments.findByIdAndUpdate(commentId, commentData, { new: true })
  }

  async removeComment(commentId, userId) {
    const comment = await this.getCommentById(commentId)
    if (userId !== comment.creatorId.toString()) {
      throw new Forbidden('You cannot delete me')
    }
    await comment.remove()
    return comment
  }

  async createComment(commentData) {
    const comment = await dbContext.Comments.create(commentData)
    return comment
  }

  async getComments(query) {
    const comment = await dbContext.Comments.find(query).populate('creator', 'name picture')
    return comment
  }
}
export const commentsService = new CommentsService()
