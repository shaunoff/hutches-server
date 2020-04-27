import { CommentAPI } from '../providers'
import { QueryResolvers } from '@models'

export const Query: QueryResolvers = {
  getComments: (root: any, args: any, { injector }: any, info: any) => {
    return injector.get(CommentAPI).getComments()
  },
}
