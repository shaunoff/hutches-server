import { DataSource } from 'apollo-datasource'
import { Injectable, ProviderScope } from '@graphql-modules/di'
import { ILike } from '@models'
import { getConnection } from 'typeorm'
import Like from '../models'
import Asset from '../../asset/models'
import User from '../../user/models'

@Injectable({
  scope: ProviderScope.Session,
})
export class LikeAPI extends DataSource {
  public connection: any
  public constructor() {
    super()
    this.connection = getConnection()
  }

  async getLikes() {
    return Like.find({ relations: ['asset'] })
  }

  async addLike(data: ILike) {
    const like = new Like()

    like.assetId = data.assetId
    like.userId = data.userId

    const asset = await Asset.findOne(data.assetId)
    const user = await User.findOne(data.userId)
    if (asset) {
      like.asset = asset
    }
    if (user) {
      like.user = user
    }

    return like.save()
  }

  // async updateAsset(data: UpdateAssetData) {
  //   console.log(data)
  //   const asset = await Asset.findOne(data.id)
  //   if (asset) {
  //     Asset.merge(asset, data)
  //     return Asset.save(asset)
  //   }
  // }

  // async deleteAsset(id: string) {
  //   await Asset.delete(id)
  //   return { id }
  // }
}
