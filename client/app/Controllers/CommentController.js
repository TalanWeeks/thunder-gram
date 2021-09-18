import { ProxyState } from '../AppState.js'
import { commentService } from '../Services/CommentService.js'

function _drawComment() {
  let template = ''
  ProxyState.comments.forEach(c => template += c.Template)
  document.getElementById('comments').innerHTML = template
}

export class CommentController {
  constructor() {
    ProxyState.on('comments', _drawComment)
  }

  addComment(commentData) {
    commentService.addComment(commentData)
  }

  createComment(postId) {
    // @ts-ignore
    event.preventDefault()
    const form = event.target
    const commentData = {
      description: form.description.value,
      id: postId
    }
    commentService.addComment(commentData)
    form.reset()
    _drawComment()
  }

  removeComment(id) {
    commentService.removeComment(id)
  }
}
