import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'

function _drawPosts() {
  let template = ''
  ProxyState.posts.forEach(p => template += p.Template)
  document.getElementById('posts').innerHTML = template
}
export class PostsController {
  constructor() {
    ProxyState.on('post', _drawPosts)
    postsService.getAllPosts()
    _drawposts
  }

  async addPosts() {
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target
    const postData = {
      title: form.title.value,
      img: form.img.value,
      description: form.description.value
    }
    try {
      await postsService.addPosts(postData)
    } catch (error) {
      console.log('⚠ Add Post', error)
    }
    form.reset()
  }
}
