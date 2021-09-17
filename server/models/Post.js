import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const PostSchema = new Schema({
  title: { type: String, minlength: 3, require: true },
  img: { type: String, required: true }
  id
})
