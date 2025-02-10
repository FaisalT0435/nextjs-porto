resource "kubernetes_horizontal_pod_autoscaler" "example" {
  metadata {
    name = "example-hpa"
  }

  spec {
    scale_target_ref {
      kind = "Deployment"
      name = "example-deployment"
    }

    min_replicas = 1
    max_replicas = 10

    target_cpu_utilization_percentage = 80
  }
}