#!/bin/sh
set -e

#setup k3d
kyma provision k3d 
kyma deploy -s main --component cluster-essentials 


