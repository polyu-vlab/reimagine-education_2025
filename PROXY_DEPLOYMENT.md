# Proxy Deployment Guide

## 🚨 **CRITICAL: You Cannot Proxy to GitHub Pages**

**The Problem**: You're trying to proxy from `reimagine-education-2025.vl.comp.polyu.edu.hk` to the GitHub Pages site, but this won't work because:

- **GitHub Pages version**: Has base path `/` (root)
- **Proxy domain**: Expects root path `/`

This creates a path mismatch that breaks navigation and assets.

## ✅ **Correct Solution: Deploy Proxy Build Directly**

### Step 1: Build the Proxy Version

```bash
./deploy.sh proxy
```

This creates a build with:

- ✅ Image paths: `/images/...` (no base path)
- ✅ Navigation: `/` and `/impact` (root paths)
- ✅ Assets: `/_next/static/...` (no base path)

### Step 2: Deploy to Your Proxy Server

**DO NOT** proxy to GitHub Pages. Instead:

1. Upload the contents of the `out/` folder to your proxy server
2. Configure your web server (nginx, Apache, etc.) to serve these static files from the root path `/`

### Step 3: Web Server Configuration

#### Nginx Example:

```nginx
server {
    listen 80;
    server_name reimagine-education-2025.vl.comp.polyu.edu.hk;

    root /path/to/your/out/folder;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Serve static assets
    location /_next/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Serve images
    location /images/ {
        expires 1y;
        add_header Cache-Control "public";
    }
}
```

#### Apache Example:

```apache
<VirtualHost *:80>
    ServerName reimagine-education-2025.vl.comp.polyu.edu.hk
    DocumentRoot /path/to/your/out/folder

    <Directory /path/to/your/out/folder>
        AllowOverride All
        Require all granted
    </Directory>

    # Handle client-side routing
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ /index.html [L]
</VirtualHost>
```

## 🔄 **Alternative: Use GitHub Pages with Custom Domain**

If you want to use GitHub Pages, you can:

1. Build the GitHub Pages version: `./deploy.sh github`
2. Deploy to GitHub Pages
3. Configure a custom domain `reimagine-education-2025.vl.comp.polyu.edu.hk` in GitHub Pages settings
4. Set up DNS to point to GitHub Pages

## 📁 **File Structure After Proxy Build**

```
out/
├── index.html          # Home page (root /)
├── impact.html         # Impact page (/impact)
├── _next/             # Next.js assets
│   └── static/
├── images/            # Image assets
│   ├── polyu-logo.png
│   ├── achievement1.png
│   └── ...
└── ...
```

## 🎯 **Summary**

- **❌ Wrong**: Proxy to GitHub Pages (paths don't match)
- **✅ Correct**: Deploy proxy build directly to your server
- **✅ Alternative**: Use GitHub Pages with custom domain

The proxy build is specifically designed for your domain and will work correctly when served directly.
