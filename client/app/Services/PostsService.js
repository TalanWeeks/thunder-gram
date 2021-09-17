import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { logger } from '../Utils/Logger.js'
import { api } from './AxiosService.js'

class PostsService {
  async getAllPosts() {
    const res = await api.get('api/posts')
    logger.log(res)
    ProxyState.posts = res.data.map(p => new Post(p))
  }

  async addPosts(postData) {
    const res = await api.post('posts', postData)
    logger.log(res)
    ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
  }
}

export const postsService = new PostsService()
