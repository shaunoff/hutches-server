import { UserAPI } from '../providers'
import { QueryResolvers } from '@models'
import { authenticated } from '../../../auth'

export const Query: QueryResolvers = {
  getUsers: (root: any, args: any, { injector }: any, info: any) => {
    return injector.get(UserAPI).getUsers()
  },
  me: authenticated(
    (root: any, args: any, { user, injector }: any, info: any) => {
      return user
    },
  ),
}
