## 🏗️ Architecture
(diagram)

## Request Flow
## Components
## Security Flow
## Ports Used
# 🏗️ Architecture Overview

## 📌 System Architecture

```
User (Browser)
     ↓ HTTPS (443)
Nginx (Reverse Proxy)
     ↓ HTTP (3000)
Docker Container (React App)
```

---

## 🔄 Request Flow

1. User accesses domain
2. DNS resolves to VPS IP
3. Request hits Nginx (HTTPS)
4. Nginx forwards request to Docker container
5. React app responds

---

## 🧩 Components

### 🌐 Domain

* Managed via DNS (Loopia)

### 🖥️ VPS

* Ubuntu server hosting application

### 🐳 Docker

* Runs containerized React app

### 🔁 Nginx

* Reverse proxy
* Handles HTTPS

### 🔐 Certbot

* Issues SSL certificates
* Auto-renews certificates

---

## 🔒 Security Flow

```
User → HTTPS → Nginx → HTTP → App
```

---

## ⚙️ Ports

| Service | Port     |
| ------- | -------- |
| Nginx   | 80 / 443 |
| App     | 3000     |
