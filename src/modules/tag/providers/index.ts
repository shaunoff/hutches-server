import { DataSource } from 'apollo-datasource'
import { Injectable, ProviderScope } from '@graphql-modules/di'
import { ITag } from '@models'
import { getConnection } from 'typeorm'
import Tag from '../models'
import Asset from '../../asset/models'
import User from '../../user/models'

@Injectable({
  scope: ProviderScope.Session,
})
export class TagAPI extends DataSource {
  public connection: any
  public constructor() {
    super()
    this.connection = getConnection()
  }

  async getTags() {
    return Tag.find({ relations: ['asset'] })
  }

  async addTag(data: ITag) {
    const tag = new Tag()

    tag.assetId = data.assetId

    const asset = await Asset.findOne(data.assetId)
    const user = await User.findOne(data.userId)
    if (asset) {
      tag.asset = asset
    }
    if (user) {
      tag.user = user
    }

    return tag.save()
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
