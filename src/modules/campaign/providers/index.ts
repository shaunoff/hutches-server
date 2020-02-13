import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest'
import { Injectable, ProviderScope, Inject } from '@graphql-modules/di'
import { CampaignSearchParams, CampaignsParams } from '@models'
import formatQueryParams from '@lib/formatQueryParams'
import { RemoteEndpoint } from '@lib/symbols'

@Injectable({
  scope: ProviderScope.Session,
})
export class CampaignAPI extends RESTDataSource {
  constructor(@Inject(RemoteEndpoint) private remoteEndpoint: string) {
    super()
    this.baseURL = this.remoteEndpoint
  }

  willSendRequest(request: RequestOptions) {
    if (this.context.token) {
      request.headers.set('Authorization', this.context.token)
    }
  }

  async getCampaignSearch(
    resourceType: String,
    resourceId: String,
    params: CampaignSearchParams,
  ) {
    return this.get(
      `/v2/${resourceType}/${resourceId}/campaigns/search${formatQueryParams(
        params,
      )}`,
    )
  }

  async getCampaigns(
    resourceType: String,
    resourceId: String,
    params: CampaignsParams,
  ) {
    return this.get(
      `/v2/${resourceType}/${resourceId}/campaigns${formatQueryParams(params)}`,
    )
  }
}
