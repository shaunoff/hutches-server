import { UserAPI } from '../providers'
import { MutationResolvers } from '@models'
//@ts-ignore
const testFunc = (tetsy) => (next) => (root, args, context, info) => {
  console.log('iytrureyiuyiuerytiuyeriutyeriuyteuriytu', context)
  return next(root, args, context, info)
}
export const Mutation: MutationResolvers = {
  //@ts-ignore
  signup: (root, { data = {} }, { injector }) => {
    //console.log(token)
    return injector.get(UserAPI).signup(data)
  },

  signin: (root, { data }, { createToken, injector }) => {
    return injector.get(UserAPI).signin(data, createToken)
  },
}
