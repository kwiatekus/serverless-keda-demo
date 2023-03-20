#!/bin/sh
set -e

k3d cluster delete kyma
k3d registry delete k3d-kyma-registry 