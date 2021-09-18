import { api } from './AxiosService.js'
import { ProxyState } from '../AppState.js'
import { Comment } from '../Models/Comment.js'
import { logger } from '../Utils/Logger.js'

class CommentService {
  async getAllComments() {
    const res = await api.get('api/thundergram/posts/comments')
    logger.log(res)
    ProxyState.comments = res.data.map(c => new Comment(c))
  }

  async addComment(commentData) {
    const res = await api.post('api/thundergram/posts/comments', commentData)
    logger.log(res)

    ProxyState.comments = [...ProxyState.comments, new Comment(res.data)]
  }

  async removeComment(id) {
    debugger
    try {
      const res = await api.delete(`api/thundergram/posts/comments/${id}`)
      logger.log('deleted', res)
    } catch (error) {
      logger.log(error)
    }
    ProxyState.comments = ProxyState.comments.filter(comment => comment.id !== id)
  }
}

export const commentService = new CommentService()
