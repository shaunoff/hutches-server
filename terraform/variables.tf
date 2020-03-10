# ---------------------------------------------------------
# Environment
# ---------------------------------------------------------
variable "environment" {
  description = "the environment to manage (dev, stg, prd)"
}

variable "provider_iam_role" {
  description = "the IAM role to assume when running AWS provider actions."
}

# ---------------------------------------------------------
# IAM
# ---------------------------------------------------------
variable "config_environment" {
  type        = "string"
  description = "the name of the parameter store environment prefix to use"
}

variable "config_service_prefix" {
  type        = "string"
  description = "the name of the parameter store service prefix to use"
}

# ---------------------------------------------------------
# ALB
# ---------------------------------------------------------
variable "host_header_match" {
  type        = "string"
  description = "host header to match on for ALB routing"
}

# ---------------------------------------------------------
# TAGGING
# ---------------------------------------------------------
variable "name" {
  type = "string"
}

variable "stack" {
  type = "string"
}

variable "team" {
  type = "string"
}

variable "squad" {
  type = "string"
}

# ---------------------------------------------------------
# HEALTH CHECK
# ---------------------------------------------------------
variable "health_check_endpoint" {
  type        = "string"
  description = "endpoint to hit for service health check"
  default     = "/.well-known/apollo/server-health"
}
