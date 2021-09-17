import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CommentSchema = new Schema({
  Comment: {
    type: String,
    minlength: 3,
    require: true,
    lowercase: true
  }

})
