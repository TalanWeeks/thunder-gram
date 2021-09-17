export class Post {
  constructor(postData) {
    this.id = postData.id
    this.title = postData.title
    this.img = postData.img
    this.description = postData.description
  }

  get Template() {
    return /* html */ `
    
    `
  }
}
