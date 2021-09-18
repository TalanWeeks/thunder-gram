import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const likeSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  like: { type: Number, default: 0, enum: [-1, 0, 1] }
})
export const PostSchema = new Schema({
  title: { type: String, minlength: 3, required: true, trim: true },
  img: { type: String, required: true },
  description: { type: String },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  likes: [likeSchema]

}, { timestamps: true, toJSON: { virtuals: true } })

PostSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
