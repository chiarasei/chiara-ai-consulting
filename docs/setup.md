## Clone Project
## Run Locally
## VPS Setup
# ⚙️ Setup Guide

## 📥 Clone Project

```bash
git clone <repo-url>
cd chiara-ai-consulting
```

---

## 💻 Run Locally

```bash
npm install
npm run dev
```

---

## 🖥️ VPS Setup

```bash
sudo apt update
sudo apt install docker.io nginx -y
sudo systemctl enable docker
```

---

## 📦 Run Application

```bash
docker pull ghcr.io/<username>/chiara-react-app:latest
docker run -d -p 3000:80 ghcr.io/<username>/chiara-react-app
```
