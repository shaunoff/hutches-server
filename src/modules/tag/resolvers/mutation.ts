import { TagAPI } from '../providers'
import { MutationResolvers } from '@models'

export const Mutation: MutationResolvers = {
  addTag: (root, { data = {} }, { injector }, info) => {
    return injector.get(TagAPI).addTag(data)
  },
}
