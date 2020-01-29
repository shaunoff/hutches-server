import { CampaignAPI } from './provider'
import { QueryResolvers } from '../../../generated/graphql'
import getParamsForFields from '../../lib/getParamsForFields'

const getCampaigns: QueryResolvers = {
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
}

const getCampaignSearch: QueryResolvers = {
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

export const Query = {
  ...getCampaignSearch,
  ...getCampaigns,
}
