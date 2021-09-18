import { AuthController } from './Controllers/AuthController.js'
import { CommentController } from './Controllers/CommentController.js'
import { PostsController } from './Controllers/PostsController.js'

class App {
  authController = new AuthController();

  postsController = new PostsController()

  commentController = new CommentController()
}

window.app = new App()
