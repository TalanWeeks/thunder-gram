import { dev } from './env.js'
import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'
import { Post } from './Models/Post'
class AppState extends EventEmitter {
  user = {}
  account = {}
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Post').Post[]} */
  posts = [new Post({ id: 1, img: 'https://th.bing.com/th/id/R.a17fa29e46385e10d12f5eb43ee3118f?rik=hQvailtJS5C3SQ&pid=ImgRaw&r=0', title: 'tester', description: 'description' })]
  socketData = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

if (dev) {
  // @ts-ignore
  window.ProxyState = ProxyState
}
