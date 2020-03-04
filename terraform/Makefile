.EXPORT_ALL_VARIABLES:
TFVARS = "tfvars/$(TFWORKSPACE).tfvars"

IMPORT_RESOURCE ?=
EXISTING_RESOURCE ?=
TFWORKSPACE ?= dev
KMS_KEY_ALIAS = "alias/terraform-secrets"

.PHONY: init
init: ## initialize terraform
	@echo "Initializing terraform"
	@terraform init

.PHONY: workspace-new
workspace-new: ## create a new workspace
	@echo "Creating a new terraform workspace"
	@terraform workspace new $(TFWORKSPACE)

.PHONY: workspace-list
workspace-list: ## lists all terraform workspaces for backend
	@terraform workspace list

.PHONY: workspace-select
workspace-select: ## select the terraform workspace to manage
	@terraform workspace select $(TFWORKSPACE)

.PHONY: plan
plan: workspace-select ## create terraform execution plan
	@echo "Creating terraform execution plan"
	@terraform plan -var-file=$(TFVARS)

.PHONY: apply
apply: workspace-select ## apply terraform changes
	@echo "Applying terraform changes"
	@terraform apply -var-file=$(TFVARS)

.PHONY: destroy
destroy: workspace-select ## destroy terraform managed infrastructure
	@echo "Destroying terraform managed infrastructure"
	@terraform destroy -var-file=$(TFVARS)

.PHONY: import
import: workspace-select ## import existing infrastructure into the project
	@echo "Importing $(IMPORT_RESOURCE) from $(EXISTING_RESOURCE)"
	@terraform import -var-file=$(TFVARS) $(IMPORT_RESOURCE) $(EXISTING_RESOURCE)

.PHONY: show
show: workspace-select ## show the terraform state
	@terraform show

.PHONY: encrypt
encrypt: # encrypt a file with kms and spit out the cipher text, for db passwords
	@KEYID=$$(aws kms list-aliases | jq -r '.Aliases[] | select(.AliasName==$(KMS_KEY_ALIAS)) | .TargetKeyId') ;\
	aws kms encrypt --key-id=$$KEYID --plaintext fileb://$(FILE) --encryption-context terraform=true --output text --query CiphertextBlob ;\

test: ## check that terraform files are valid
	@terraform validate -var-file=$(TFVARS) . && echo "√ stack"

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'