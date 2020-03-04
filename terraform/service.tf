# ecs-service
module "role" {
  source = "git@github.com:promoboxx/terraform-ecs-task-iam-role-module.git?ref=master"

  # source           = "../../terraform-ecs-service-iam-role-module"
  environment      = "${var.config_environment}"
  config_namespace = "${var.service_prefix}"
  tags             = "${local.common_tags}"
}

# service target group
resource "aws_lb_target_group" "service" {
  name                 = "${var.environment}-${var.service_prefix}"
  port                 = "8080"
  protocol             = "HTTP"
  vpc_id               = "${data.terraform_remote_state.vpc.vpc_id}"
  deregistration_delay = 30

  health_check = {
    protocol            = "HTTP"
    path                = "${var.health_check_endpoint}"
    interval            = 10
    timeout             = 2
    healthy_threshold   = 3
    unhealthy_threshold = 3
    matcher             = "200"
  }

  tags = "${local.common_tags}"
}

# rule to route HTTP calls to this group
resource "aws_lb_listener_rule" "service" {
  listener_arn = "${data.terraform_remote_state.cluster.public_https_listener_arn}"

  action {
    type             = "forward"
    target_group_arn = "${aws_lb_target_group.service.arn}"
  }

  condition {
    field  = "path-pattern"
    values = ["${var.path_prefix}"]
  }

  condition {
    field  = "host-header"
    values = ["${var.host_header}"]
  }
}
