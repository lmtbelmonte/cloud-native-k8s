# Luis Merino : Este repo es para curso manning
# Creating and Managing Cloud Native Services in Kubernetes

Esta adaptado para funcionar con openshift 4.5, tanto la imagen par funcionar sin root
como el cert-manager para los certificados TLS y otros cambios

Es necesario desplegar el configMap cluster-monitoring-config y añadir el setting
techPreviewUserWorkload y poner enabled a true

apiVersion: v1
kind: ConfigMap
metadata:
  name: cluster-monitoring-config
  namespace: openshift-monitoring
data:
  config.yaml: |
    techPreviewUserWorkload:
      enabled: true

Comrobamos que los pods user-workload estan running