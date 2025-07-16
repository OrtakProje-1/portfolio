# AŞAMA 1: Build
FROM node:20-alpine AS build

# Çalışma dizini oluştur
WORKDIR /app

# Gerekli dosyaları kopyala
COPY package.json package-lock.json* pnpm-lock.yaml* ./
COPY . .

# Bağımlılıkları yükle
RUN npm install

# Production için build et
RUN npm run build

# AŞAMA 2: Production Sunucusu (NGINX)
FROM nginx:stable-alpine

# Build sonucunu NGINX'e kopyala
COPY --from=build /app/dist /usr/share/nginx/html

# NGINX yapılandırması (opsiyonel ama tavsiye edilir)
COPY nginx.conf /etc/nginx/conf.d/default.conf


# 80 portunu dışa aç
EXPOSE 80

# NGINX'i başlat
CMD ["nginx", "-g", "daemon off;"]