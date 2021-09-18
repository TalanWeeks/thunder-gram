export class Post {
  constructor(postData) {
    this.id = postData.id
    this.title = postData.title
    this.img = postData.img
    this.description = postData.description
    this.likes = postData.likes
  }

  get Template() {
    return /* html */ `
      <div class="col-md-3">
        <div class="card  my-2" >
          <div class="card-header p-0">
          <button class="btn btn-danger" onclick="app.postsController.deletePost('${this.id}')">X</button>
          </div>

              <div class="card-body card-custom p-0">
              <img class="img-fluid text-center img-custom" src="${this.img}" alt=":(" >
                
              </div>
              <div class="container-fluid  card-footer">
                <div class="row">
                  <div class="col">
                  
                    <title>"${this.title}"</title>
                  </div>
                </div>
                <div class="row text-center">
                  <div class="col-2">
                    <!-- add on click to add a like to this post -->
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/169px-Heart_coraz%C3%B3n.svg.png" class="selectable" selectable onclick="app.postsController.addLikes()" height="45" alt="">
                    
                  </div>
                  <div class="col-8">
                    <span>"${this.description}"</span>
                  </div>
                  <div class="col-2">
                    <!-- add on click to add a comment to this post -->
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX13068803.jpg" class="selectable" onclick="app.postsController.toggleCommentsForm()" height="45" alt="">
                  </div>
                </div>
              </div>
            </div>
            <form class="visually-hidden" onsubmit="" id="commentForm">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="title" class="text-light">Comment</label>
                  <input type="text" class='form-control' name="title" id="title" minlength="3">
                  <div class="button-group"> 
                    <button type="reset" class="btn btn-secondary">Reset</button>
                    <button type="submit" class="btn btn-primary">Post</button>
                  </div> 
                </div>
              </div>
            </div>
            </form>
          </div>
    `
  }
}
