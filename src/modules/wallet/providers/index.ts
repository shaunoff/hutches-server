import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { Inject, Injectable, ProviderScope } from '@graphql-modules/di'
import { WalletsParams, AddFundsParams } from '@models'
import formatQueryParams from '@lib/formatQueryParams'
import AppConfig from '@config/AppConfig'

@Injectable({
  scope: ProviderScope.Session,
})
export class WalletService extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = AppConfig.SERVICE_API_HOST
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
