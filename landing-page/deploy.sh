npm run build
docker build --platform linux/amd64 . -t benarmstrong/landing-page:latest
docker push benarmstrong/landing-page:latest
ssh ben-docker-1 'cd benarmstro.ng; docker-compose pull landing-page; docker-compose up -d'