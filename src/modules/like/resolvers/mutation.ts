import { LikeAPI } from '../providers'
import { MutationResolvers } from '@models'

export const Mutation: MutationResolvers = {
  addLike: (root, { data = {} }, { injector }, info) => {
    return injector.get(LikeAPI).addLike(data)
  },
}
