import { Maybe } from '@models'
import {
  FieldNode,
  FragmentSpreadNode,
  InlineFragmentNode,
  GraphQLResolveInfo,
} from 'graphql'

interface IDictionary<T> {
  [key: string]: T
}

type Params = {
  [key: string]:
    | IDictionary<any[]>
    | IDictionary<any>
    | string
    | number
    | null
    | undefined
}

const fields = [
  'brand',
  'latest_scheduled_share_date',
  'features',
  'configured_channels',
  'share_url',
  'logo_url',
  'assets',
  'asset_count',
  'liquid',
  'engagement_stats',
  'share_settings',
  'instamatch_available',
  'facebook_ads_enabled',
  'mobile_ads_enabled',
  'instagram_ads_enabled',
  'invitations',
  'communication_counts',
  'engaged_retailer_count',
  'invitation',
  'bounties',
  'rewards',
  'current_user_opted_out',
  'lead_count',
  'leads_unsubscribed_count',
  'allocation',
  'allocation_balance',
  'spending_summary',
  'spending_by_retailer_summaries',
  'failed_ad_run_task_count',
  'ad_run_count',
  'ad_creative_templates',
  'ad_previews',
  'ad_settings',
  'ads_enabled',
  'aggregate_ads_insights',
  'tag_list',
  'registration_keys',
  'division_referral_registration_keys',
  'logo',
  'digital_assets',
  'humanized_facebook_ad_targeting',
  'kpi',
  'share_settings_count_per_share_type',
  'auto_append_url_enabled',
  'logo_public_id',
  'fbpage_campaign_id',
]

const getParamsForFields = (
  info: GraphQLResolveInfo,
  params: any | null,
): any => {
  if (!params) {
    params = {}
  }
  info?.fieldNodes.forEach((fieldNode) => {
    if (fieldNode.selectionSet !== undefined) {
      fieldNode.selectionSet?.selections.forEach((selection: any) => {
        const field = selection.name.value
        if (fields.includes(field)) {
          if (!params) {
            params = {}
          }
          if (!params.fields) {
            params.fields = []
          }
          params.fields.push(field)
        }
      })
    }
  })

  return params
}

export default getParamsForFields
