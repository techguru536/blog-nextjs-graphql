export default async (parent, args, ctx) => {
  try {
    const userModel = ctx.db.model('user')
    return await userModel.findOne({ _id: parent.commentedBy })
  } catch (error) {
    throw new Error(error)
  }
}
