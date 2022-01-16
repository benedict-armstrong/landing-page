ng build
docker build --platform linux/amd64 . -t benarmstrong/landing-page:latest
docker push benarmstrong/landing-page:latest
