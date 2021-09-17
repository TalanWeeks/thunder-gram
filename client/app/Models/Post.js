export class Post {
  constructor(postData) {
    this.id = postData.id
    this.title = postData.title
    this.img = postData.img
    this.description = postData.description
  }

  get Template() {
    return /* html */ `
    <div class="card my-4">
              <div class="card-body p-0">
                <img class="img-fluid" src="${this.img}" alt=":(">
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
                    <span>"heart icon"</span>
                  </div>
                  <div class="col-8">
                    <span>"${this.description}"</span>
                  </div>
                  <div class="col-2">
                    <!-- add on click to add a comment to this post -->
                    <p>"comment icon"</p>
                  </div>
                </div>
              </div>
            </div>
    `
  }
}
