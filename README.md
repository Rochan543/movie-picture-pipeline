## Deployed Application

The Movie Picture Pipeline application is deployed to Amazon EKS using GitHub Actions CI/CD pipelines.

### Frontend

http://a08609f94985840d79c73a264b5b7b3d-1126793289.us-east-1.elb.amazonaws.com

### Backend API

http://aa2cf26244b4a45ffb71d7af3d54db79-1538188663.us-east-1.elb.amazonaws.com/movies

## Deployment Verification

- Frontend CI/CD performs linting, testing, Docker image building, ECR push, and EKS deployment.
- Backend CI/CD performs linting, testing, Docker image building, ECR push, and EKS deployment.
- Docker images are stored in Amazon ECR.
- Docker images are tagged using the Git commit SHA.
- AWS credentials are securely provided through GitHub Actions Secrets.
- Kubernetes manifests are deployed using Kustomize.
- The frontend communicates with the deployed backend API using `REACT_APP_MOVIE_API_URL`.

## Deployment Status

- Frontend: Running successfully
- Backend: Running successfully
- Frontend EKS deployment: Successful
- Backend EKS deployment: Successful