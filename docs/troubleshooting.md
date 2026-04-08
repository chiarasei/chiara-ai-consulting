## Issues & Fixes

### Docker not running
Fix: restart Docker

### Port conflict
Fix: stop container

### Certbot failure
Fix: open ports 80/443

### DNS not updating
Fix: wait + flush cache
# 🧠 Troubleshooting Guide

## 🐳 Docker Not Running

**Issue:**
Docker build failed

**Fix:**
Restart Docker Desktop

---

## 📦 Large Build Context

**Issue:**
Slow Docker build

**Fix:**
Use `.dockerignore`

---

## ⚠️ Port 80 Conflict

**Issue:**
Nginx failed to start

**Cause:**
Docker using port 80

**Fix:**
Stop container or use port 3000

---

## 🔐 Certbot Failed

**Issue:**
Timeout during verification

**Fix:**
Open firewall ports:

```bash
sudo ufw allow 80
sudo ufw allow 443
```

---

## 🌐 DNS Not Updating

**Issue:**
Domain pointing to old IP

**Fix:**

* Wait for propagation
* Flush DNS cache

