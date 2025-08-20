# 🛍️ Product Management System

Ürün ekleyip ürün listelenebilen basit bir ürün yönetim sistemi. 
Backend'de .NET 9 Web API, frontend'de Next.js kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- ✅ Ürün ekleme, listeleme
- ✅ Modern, responsive arayüz
- ✅ PostgreSQL veritabanı
- ✅ Environment variables ile yapılandırma
- ✅ REST API
- ✅ File upload sistemi

## 🚀 Proje Amaçları
- Backend mimarisi kurma
- RestAPI oluşturma
- Frontend arayüzünde API kullanımını gösterme

## 📋 Gereksinimler

Projeyi çalıştırmak için aşağıdaki yazılımların yüklü olması gerekir:

### Backend
- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- [PostgreSQL 12+](https://www.postgresql.org/download/)

### Frontend
- [Node.js 18+](https://nodejs.org/)
- [npm veya yarn](https://www.npmjs.com/)

## 🔧 Kurulum

### 1. Repository'yi Clone Edin
```bash
git clone <repository-url>
cd Task1
```

### 2. Backend Kurulumu

#### 2.1. Backend Dependencies
```bash
cd backend/ProductAPI
dotnet restore
```

#### 2.2. PostgreSQL Veritabanı Hazırlığı
PostgreSQL'i çalıştırın ve yeni bir veritabanı oluşturun:
```sql
-- PostgreSQL'de çalıştırın
CREATE DATABASE ProductDB;
```

#### 2.3. Environment Variables (.env)
Backend klasöründe `.env` dosyası oluşturun:
```bash
cd backend/ProductAPI
```

`.env` dosyası içeriği:
```env
# Database Configuration
ConnectionStrings__DefaultConnection=Host=localhost;Database=YOUR_POSTGRESS_DB_NAME;Username=YOUR_POSTGRESS_USERNAME;Password=YOUR_POSTGRES_PASSWORD;Port=YOUR_POSTGRES_PORT

# API Configuration
API_PORT=5233
```
 

**⚠️ ÖNEMLİ:** `YOUR_POSTGRES_PASSWORD` yerine kendi PostgreSQL şifrenizi yazın.

#### 2.4. Database Creation
```bash
# Veritabanını oluştur ve tabloları kur
dotnet ef database update
```

#### 2.5. Backend'i Çalıştır
```bash
dotnet run
```

Backend başarılı şekilde çalışırsa:
- API: http://localhost:5233/product
- Swagger UI: http://localhost:5233/swagger

### 3. Frontend Kurulumu

Yeni bir terminal açın:

#### 3.1. Frontend Dependencies
```bash
cd frontend/frontend_app
npm install
```

#### 3.2. Environment Variables (.env.local)
Frontend klasöründe `.env.local` dosyası oluşturun:
```bash
cd frontend/frontend_app
```

`.env.local` dosyası içeriği:
```env
# Backend API Configuration
NEXT_PUBLIC_API_PORT=5233
```

#### 3.3. Frontend'i Çalıştır
```bash
npm run dev
```

Frontend başarılı şekilde çalışırsa:
- Frontend: http://localhost:3000

## 🎯 Kullanım

1. **Ürünleri Görüntüleme**: http://localhost:3000/products
2. **Ürün Ekleme**: http://localhost:3000/add-product
3. **API Dokümantasyonu**: http://localhost:5233/swagger

## 📁 Proje Yapısı

```
ApıDevelopment/
├── backend/
│   └── ProductAPI/
│       ├── Controllers/         # API Controllers
│       ├── Data/               # Database Context
│       ├── DTOs/               # Data Transfer Objects
│       ├── Models/             # Entity Models
│       ├── Services/           # Business Logic
│       ├── Repositories/       # Data Access
│       ├── wwwroot/uploads/    # Uploaded Files
│       ├── .env               # Backend Environment Variables
│       └── Program.cs         # Application Entry Point
├── frontend/
│   └── frontend_app/
│       ├── src/app/
│       │   ├── components/    # React Components
│       │   ├── products/      # Products Page
│       │   └── add-product/   # Add Product Page
│       ├── .env.local        # Frontend Environment Variables
│       └── package.json
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/product` | Tüm ürünleri listele |
| POST | `/product` | Yeni ürün ekle (multipart/form-data) |

### POST /product Örnek Request (Multipart Form)
```
Content-Type: multipart/form-data

Name: "Örnek Ürün"
Price: 99.99
Description: "Ürün açıklaması"
Files: [file1.jpg, file2.png]
```

## 🐛 Sorun Giderme

### Backend Sorunları

#### PostgreSQL Bağlantı Hatası
```
Npgsql.PostgresException: 28P01: password authentication failed
```
**Çözüm:** `.env` dosyasındaki PostgreSQL şifresi doğru olduğundan emin olun.

#### Port Zaten Kullanımda
```
System.IO.IOException: Failed to bind to address
```
**Çözüm:** 5233 portu kullanımda. Farklı bir port kullanın veya çalışan uygulamayı kapatın.



### Frontend Sorunları

#### API Bağlantı Hatası
```
Failed to fetch
```
**Çözüm:** Backend'in çalıştığından ve `.env.local` dosyasındaki port numarasının doğru olduğundan emin olun.

#### Resim Yüklenmeme
Backend'in static files serve ettiğinden emin olun. http://localhost:5233/uploads/5f653fff-edf0-4fc6-8c18-3aec0b1919da.jpg
 adresine erişmeyi deneyin.

## 📝 Notlar

- **File Upload Limiti:** Maksimum 5MB per dosya
- **Desteklenen Formatlar:** .jpg, .jpeg, .png, .webp
- **Database:** PostgreSQL kullanılmaktadır
- **Port Yapılandırması:** Backend ve frontend portları `.env` dosyalarından değiştirilebilir

