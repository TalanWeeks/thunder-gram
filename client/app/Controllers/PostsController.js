/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'
import { logger } from '../Utils/Logger.js'

function _drawPosts() {
  let template = ''
  ProxyState.posts.forEach(p => template += p.Template)
  document.getElementById('posts').innerHTML = template
}
export class PostsController {
  constructor() {
    ProxyState.on('posts', _drawPosts)
    // _drawPosts()
    this.getAllPosts()
  }

  async getAllPosts() {
    try {
      await postsService.getAllPosts()
    } catch (error) {
      logger.log('⚠ GET ALL POST', error)
    }
  }

  togglePostForm() {
    document.getElementById('postForm').classList.toggle('visually-hidden')
  }

  async addPosts() {
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore

    const form = event.target
    const postData = {
      // @ts-ignore
      title: form.title.value,
      // @ts-ignore
      img: form.img.value,
      // @ts-ignore
      description: form.description.value
    }
    try {
      await postsService.addPosts(postData)
    } catch (error) {
      logger.log('⚠ Add Post', error)
    }
    // @ts-ignore
    form.reset()
  }
}
