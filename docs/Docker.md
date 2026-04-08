## Dockerfile
## .dockerignore
## Build Image
## Run Container
## Push to GHCR
# 🐳 Docker Documentation

## 📦 Dockerfile

```dockerfile
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
```

---

## 🚫 .dockerignore

```
node_modules
.git
dist
.env
```

---

## 🔨 Build Image

```bash
docker build -t chiara-react-app .
```

---

## ▶️ Run Container

```bash
docker run -d -p 8080:80 chiara-react-app
```

---

## 🚀 Push to GHCR

```bash
docker login ghcr.io
docker tag chiara-react-app ghcr.io/<username>/chiara-react-app:latest
docker push ghcr.io/<username>/chiara-react-app:latest
```
