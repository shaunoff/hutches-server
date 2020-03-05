output "task_role_arn" {
  value = "${module.role.role_arn}"
}

#echo out the cluster task execution role arn for convenience
output "task_execution_role_arn" {
  value = "${data.terraform_remote_state.cluster.cluster_task_execution_role_arn}"
}

output "service_role_arn" {
  value = "${data.terraform_remote_state.cluster.cluster_service_role_arn}"
}

output "target_group_arn" {
  value = "${aws_lb_target_group.service.arn}"
}
