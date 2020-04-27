import { LikeAPI } from '../providers'
import { QueryResolvers } from '@models'

export const Query: QueryResolvers = {
  getLikes: (root: any, args: any, { injector }: any, info: any) => {
    return injector.get(LikeAPI).getLikes()
  },
}
