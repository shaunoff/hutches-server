terraform {
  backend "s3" {
    bucket         = "pbxx-terraform-state"
    key            = "graphql-server/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock"
    encrypt        = true
  }
}

provider "aws" {
  region  = "us-east-1"
  version = "~> 1.41"

  assume_role {
    role_arn = "${var.provider_iam_role}"
  }
}

data "terraform_remote_state" "vpc" {
  backend = "s3"

  config {
    bucket         = "pbxx-terraform-state"
    key            = "common/network.tf"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock"
    encrypt        = true
  }

  workspace = "${terraform.workspace}"
}

data "terraform_remote_state" "cluster" {
  backend = "s3"

  config {
    bucket         = "pbxx-terraform-state"
    key            = "common/cluster.tf"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock"
    encrypt        = true
  }

  workspace = "${terraform.workspace}"
}

locals {
  common_tags = {
    "environment" = "${var.environment}"
    "stack"       = "${var.stack}"
    "team"        = "${var.team}"
    "squad"       = "${var.squad}"
  }
}
