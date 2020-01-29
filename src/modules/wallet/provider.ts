import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { Injectable, ProviderScope } from '@graphql-modules/di'
import { WalletsParams, AddFundsParams } from '../../../generated/graphql'
import formatQueryParams from '../../lib/formatQueryParams'

@Injectable({
  scope: ProviderScope.Session,
})
export class WalletService extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://service.dev.pbxx.io'
  }

  willSendRequest(request: RequestOptions) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token)
    }
  }

  async getWallets(params: WalletsParams) {
    return this.get(`/wallet/v1/wallets${formatQueryParams(params)}`)
  }

  async addFunds(params: AddFundsParams) {
    return this.post(`/wallet/v1/brand/${params.brand_id}/deposit`, {
      source: params.source,
      source_id: params.source_id,
      amount_cents: params.amount_cents,
    })
  }
}
