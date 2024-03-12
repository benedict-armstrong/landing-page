# Landing Page for Benarmstro.ng

## Developing

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Create a production version:

```bash
npm run build
```

## Deploying

Build docker image

```bash
docker build --platform linux/amd64 -t docker.benarmstro.ng/landing-page --push .
```

Then connect to ben-docker-1 and pull latest image
