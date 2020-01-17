import { gql } from 'apollo-server'

const Campaign = gql`
  type File {
    public_id: String
    resource_type: String
  }

  type Logo {
    external_video_url: String
    file: File
  }

  type Allocation {
    id: ID!
    owner_id: Int
    owner_type: String
    created_by_id: Int
    created_at: String
    updated_at: String
    updated_by_id: Int
    deleted_at: String
    owner_name: String
    owner_slug: String
  }

  type SpendingSummary {
    balance_cents: Int
    awarded_cents: Int
    redeemed_cents: Int
    total_spent_cents: Int
    unredeemed_cents: Int
    allocated_cents: Int
    self_funded_cents: Int
    created_at: String
    updated_at: String
    brand_id: Int
    campaign_id: Int
    id: ID!
    brand_slug: String
    campaign_link_id: String
    campaign_name: String
    campaign_end_date: String
    retailer_wallet_amount_cents: Int
    coop_funded_cents: Int
  }

  type RegistrationKeys {
    id: ID!
    link_id: String
    brand_id: Int
    campaign_id: Int
    user_id: String
    created_by_id: Int
    created_at: String
    updated_by_id: Int
    updated_at: String
    deleted_at: String
    retailer_id: String
    state: String
    registration_url: String
    default: Boolean
    division_id: Int
    rep_id: Int
  }

  type AdCreativeTemplates {
    id: ID!
    format: String
    placement: String
    campaign_id: Int
    created_at: String
    updated_at: String
    message: String
    name: String
    ecpm: Float
  }

  type Invitation {
    accepted_at: String
    campaign_id: Int
    communication_automation_id: String
    communication_id: Int
    created_at: String
    created_by_id: Int
    deleted_at: String
    id: ID!
    import_key: String
    opted_out: Boolean
    retailer_id: Int
    state: String
    status: String
    updated_at: String
    updated_by_id: Int
    user_id: String
    uuid: String
  }

  type Invitations {
    accepted_at: String
    campaign_id: Int
    communication_automation_id: String
    communication_id: Int
    created_at: String
    created_by_id: Int
    deleted_at: String
    id: ID!
    import_key: String
    opted_out: Boolean
    retailer_id: Int
    state: String
    status: String
    updated_at: String
    updated_by_id: Int
    user_id: String
    uuid: String
  }

  type ShareSettingsCountPerShareType {
    channel: String
    count: Int
    share_data: String
    last_created_on: String
  }

  type SharesCreated {
    facebook_shares_created: Int
    twitter_shares_created: Int
    email_shares_created: Int
  }

  type ConsumerImpressions {
    share_organic_impressions: Int
    share_paid_impressions: Int
    ads_paid_impressions: Int
  }

  type Kpi {
    ads_executed: Int
    shares_created: SharesCreated
    consumer_impressions: ConsumerImpressions
  }

  type Facebook {
    id: ID!
    enabled: Boolean
    campaign_id: Int
    created_at: String
    updated_at: String
    name: String
    deleted_at: String
    created_by_id: Int
    updated_by_id: Int
    facebook_ad_type: String
  }

  type AdSettings {
    mobile: String
    instagram: String
    facebook: [Facebook]
  }

  type AdPreviews {
    mobile: String
    instagram: String
    facebook: [String]
  }

  type AdRatio {
    facebook: Int
  }

  type CommunicationCounts {
    draft: Int
    launched: Int
    scheduled: Int
  }

  type EngagementStats {
    total_count: Int
    pending_count: Int
    eligible_count: Int
    viewed_count: Int
    engaged_count: Int
    opted_out_count: Int
    consumer_view_count: Int
    consumer_lead_count: Int
    engagement_rate: Int
    campaign_id: Int
  }

  type Campaign {
    id: ID!
    name: String
    start_date: String
    end_date: String
    link_id: String
    brand_id: Int
    created_at: String
    updated_at: String
    base_url: String
    campaign_type: String
    default_share_url: String
    retailer_customizable: Boolean
    customizer_url: String
    landing_header_html: String
    landing_sidebar_html: String
    shorten_urls: Boolean
    facebook_url: String
    creative_path: String
    description: String
    deleted_at: String
    frame_content_url: String
    engine_hosted: Boolean
    open_enrollment: Boolean
    activation_complete_message: String
    created_by_id: Int
    updated_by_id: Int
    leads_enabled: Boolean
    discovered_content_hash: String
    match_enabled: Boolean
    leads_always_send_transactional_email: Boolean
    latest_scheduled_share_date: String
    days_remaining: String
    status: String
    type_name: String
    share_url: String
    logo_url: String
    asset_count: Int
    retailer_match_funding_enabled: Boolean
    instamatch_enabled: Boolean
    instamatch_strategy: String
    instamatch_award_value: String
    instamatch_max_award_value: String
    match_custom_message: String
    facebook_ads_enabled: Boolean
    mobile_ads_enabled: Boolean
    instagram_ads_enabled: Boolean
    instamatch_available: Boolean
    state: String
    engaged_retailer_count: Int
    ad_targeting_radius: String
    facebook_ad_targeting: String
    co_op_enabled: Boolean
    current_user_opted_out: Boolean
    lead_count: Int
    leads_unsubscribed_count: Int
    allocation_balance: Int
    failed_ad_run_task_count: Int
    ad_run_count: Int
    ads_enabled: Boolean
    legacy_accounting: Boolean
    custom_share_url_id: String
    survey_enabled: Boolean
    custom_form_id: Int
    brand_sponsored_fees_enabled: Boolean
    popular: Boolean
    popular_updated_at: String
    copy_preapproved: Boolean
    humanized_facebook_ad_targeting: String
    share_settings_count: Int
    reporting_filters_bots: Boolean
    auto_append_url_enabled: Boolean
    logo_public_id: String
    destination_url_params: String
    hubspot_form_id: String
    uuid: String
    fbpage_campaign_id: String
    logo: Logo
    digital_assets: [DigitalAsset]
    allocation: Allocation
    spending_summary: SpendingSummary
    registration_keys: [RegistrationKeys]
    ad_creative_templates: [AdCreativeTemplates]
    rewards: [String]
    invitation: [Invitation]
    invitations: [Invitations]
    bounties: [String]
    share_settings: [ShareSetting]
    assets: [Asset]
    brand: Brand
    share_settings_count_per_share_type: [ShareSettingsCountPerShareType]
    kpi: Kpi
    division_referral_registration_keys: [String]
    tag_list: [String]
    ad_settings: AdSettings
    ad_previews: AdPreviews
    ad_ratio: AdRatio
    communication_counts: CommunicationCounts
    engagement_stats: EngagementStats
    configured_channels: [String]
    features: [String]
  }
`

export default Campaign
