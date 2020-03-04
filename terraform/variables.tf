variable "environment" {
  type        = "string"
  description = "name of the environment to deploy to"
}

variable "config_environment" {
  type        = "string"
  description = "the name of the parameter store environment to use"
}

variable "provider_iam_role" {
  type        = "string"
  description = "the IAM role to assume when running AWS provider actions."
}

variable "service_prefix" {
  type        = "string"
  description = "the prefix name of this service (aka 'ad-service' would be 'ad')"
}

variable "path_prefix" {
  type        = "string"
  description = "The path prefix to match incoming requests to this service in the ALB, combined with host_header"
}

variable "host_header" {
  type        = "string"
  description = "The host header to match incoming requests to this service in the ALB, combined with path_prefix"
}

variable "health_check_endpoint" {
  type        = "string"
  description = "endpoint to hit for service health check"
  default     = "/.well-known/apollo/server-health"
}
