import { ProxyState } from '../AppState.js'
import { Post } from '../Models/Post.js'
import { api } from './AxiosService.js'

class PostsService {
  async getAllPosts() {
    const res = await api.get()
    console.log(res)
    ProxyState.posts
  }

  async addPosts(postData) {
    const res = await api.post('posts', postData)
    console.log(res)
    ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
  }
}

export const postsService = new PostsService()
