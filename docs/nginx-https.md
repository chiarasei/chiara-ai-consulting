## Nginx config
## DNS setup
## Certbot setup
# 🌐 Nginx & HTTPS Setup

## 🔁 Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name chiaraaiconsulting.se www.chiaraaiconsulting.se;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

---

## 🔗 Enable Site

```bash
sudo ln -s /etc/nginx/sites-available/chiara /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🌍 DNS Setup

```
@ → VPS IP
www → VPS IP
```

---

## 🔐 Install HTTPS

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d chiaraaiconsulting.se -d www.chiaraaiconsulting.se
```

---

## 🔄 Auto-renewal

```bash
sudo systemctl list-timers
```
