import { TagAPI } from '../providers'
import { QueryResolvers } from '@models'

export const Query: QueryResolvers = {
  getTags: (root: any, args: any, { injector }: any, info: any) => {
    return injector.get(TagAPI).getTags()
  },
}
