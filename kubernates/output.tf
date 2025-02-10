output "cluster_endpoint" {
  description = "Endpoint for EKS control plane"
  value       = module.eks.cluster_endpoint
}

output "kubeconfig" {
  description = "kubectl config file contents for the EKS cluster"
  value       = module.eks.kubeconfig
}