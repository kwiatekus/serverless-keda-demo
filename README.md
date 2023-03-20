# serverless-keda-demo

This repository contains application for serverless and keda modules.
As a result you will get a kyma serverless function that is scaled by keda based on function's runtime CPU consumption.  

# Install

## Install operators for serverless and keda

```bash
kubectl apply -k operators
```

## Install serverless and keda modules

1. Prepare external docker registry secret

Rename `modules/external-docker-registry/dockerconfig-template.env` to `modules/external-docker-registry/dockerconfig.env` and fill in docker registry credentials.


2. Install modules

```bash
kubectl apply -k modules
```

## Install Demo app

```bash
kubectl apply -k demo-app  
```