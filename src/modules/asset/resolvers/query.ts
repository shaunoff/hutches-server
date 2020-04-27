import { AssetAPI } from '../providers'
import { QueryResolvers } from '@models'

export const Query: QueryResolvers = {
  getAssets: (root: any, args: any, { injector, user }: any, info: any) => {
    console.log('tokengdhfgsdjhfgjhdsgfjhdgsh', user)
    return injector.get(AssetAPI).getAssets()
  },
}
