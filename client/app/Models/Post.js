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
    <div class="card my-4">
              <div class="card-body p-0">
                <img class="img-fluid" height= 55 src="${this.img}" alt=":(">
              </div>
              <div class="container-fluid card-footer">
                <div class="row">
                  <div class="col">
                    <title>"${this.title}"</title>
                  </div>
                </div>
                <div class="row text-center">
                  <div class="col-2">
                    <!-- add on click to add a like to this post -->
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/169px-Heart_coraz%C3%B3n.svg.png" onclick="app.postsController.addLikes()" height="45" alt="">
                    <span>${this.likes}</span>
                  </div>
                  <div class="col-8">
                    <span>"${this.description}"</span>
                  </div>
                  <div class="col-2">
                    <!-- add on click to add a comment to this post -->
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX13068803.jpg" height="45" alt="">
                  </div>
                </div>
              </div>
            </div>
    `
  }
}
