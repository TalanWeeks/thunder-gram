import { ProxyState } from '../AppState.js'
import { commentService } from '../Services/CommentService.js'

function _drawComment() {
  const comments = ProxyState.comments
  let commentTemplate = ''
  comments.forEach(comment => commentTemplate += comment.commentTemplate)
  document.getElementById('comments').innerHTML = commentTemplate
}

export class CommentController {
  constructor() {
    ProxyState.on('comments', _drawComment)
  }

  addComment(commentData) {
    commentService.addComment(commentData)
  }

  createComment(postId) {
    debugger
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
