# ---------------------------------------------------------
# Environment
# ---------------------------------------------------------
environment = "stg"

config_environment = "staging"

provider_iam_role = "arn:aws:iam::352348888095:role/DeveloperAccess"

config_service_prefix = "graphql-server"

host_header_match = "graph.stg.pbxx.io"

# ---------------------------------------------------------
# TAGGING
# ---------------------------------------------------------
name = "graphql-server"

stack = "graphql"

team = "ui"

squad = "blue-barracudas"
