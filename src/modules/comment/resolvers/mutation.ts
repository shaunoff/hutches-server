import { CommentAPI } from '../providers'
import { MutationResolvers } from '@models'

export const Mutation: MutationResolvers = {
  addComment: (root, { data = {} }, { injector }, info) => {
    return injector.get(CommentAPI).addComment(data)
  },
}
