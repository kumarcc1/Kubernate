* lets change nginx version
  kubectl set image deployment/nginx-deployment nginx=nginx:1.91 --record
* Check rollout status
kubectl rollout status deployment.v1.apps/nginx-deployment

* kubectl get rs
* kubectl get pods
* kubectl describe deployments


* Rollout history of deployment
kubectl rollout history deployment.v1.apps/nginx-deployment


* Rollout history of specific revision
kubectl rollout history deployment.v1.apps/nginx-deployment --revision=2

* Rollback to previous version
kubectl rollout undo deployment.v1.apps/nginx-deployment

* Check if rollback was successful
kubectl get deployment nginx-deployment

* Lets scale the application
kubectl scale deployment.v1.apps/nginx-deployment --replicas=10

* if HPA is enabled to auto-scale then for example:
kubectl autoscale deployment.v1.apps/nginx-deployment --min=10 --max=15 --cpu-percent=80
