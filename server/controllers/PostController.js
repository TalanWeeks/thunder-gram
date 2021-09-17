import BaseController from '../utils/BaseController'
// import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from "../services/PostsService"

export class PostsController extends BaseController {
  constructor(){
    super('api/thundergram')
    this.router
    .get('',this.getAllPosts)
    // .get('/:id', this.getPost)
}
async getAllPosts(req, res, next){
  try {
    const posts = await postsService.getAllPosts()
    res.send(posts)   
  } catch (error) {
    next(error)
  }
  
}
  
}