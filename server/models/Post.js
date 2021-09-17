import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const PostSchema = new Schema({
  title: { type: String, minlength: 3, require: true, trim: true },
  img: { type: String, required: true },
  description: { type: String },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
})
