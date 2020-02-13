import { CampaignAPI } from '../providers'
import { QueryResolvers } from '@models'
import getParamsForFields from '@lib/getParamsForFields'

export const Query: QueryResolvers = {
  getCampaigns: (
    root,
    { resourceType, resourceId, params = {} },
    { injector },
    info,
  ) => {
    params = getParamsForFields(info, params)
    return injector
      .get(CampaignAPI)
      .getCampaigns(resourceType, resourceId, params)
  },
  getCampaignSearch: (
    root,
    { resourceType, resourceId, params = {} },
    { injector },
    info,
  ) => {
    return injector
      .get(CampaignAPI)
      .getCampaignSearch(resourceType, resourceId, params)
  },
}
