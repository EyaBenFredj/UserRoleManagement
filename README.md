
# 🛡️ UserRoleManagementApi (Backend)

A secure, extensible ASP.NET Core 8 Web API for managing users, roles, and posts — powered by **JWT authentication**, **EF Core**, and **PostgreSQL**, with full Swagger UI support and Dockerized for easy deployment.

---

## 🔧 Tech Stack

- ASP.NET Core 8
- Entity Framework Core
- PostgreSQL
- JWT Authentication
- Swagger / OpenAPI
- Docker & Docker Compose
- Visual Studio 2022+

---

## 📁 Project Structure

```
UserRoleManagementApi/
│
├── appsettings.Development.json
├── appsettings.json
├── Controllers/
│   ├── UsersController.cs
│   ├── PostsController.cs
│   ├── RolesController.cs
├── Data/
│   ├── ApplicationDbContext.cs
├── Migrations/
├── Models/
│   ├── User.cs
│   ├── Post.cs
│   ├── Role.cs
│   ├── Dtos/
│       ├── CreatePostDto.cs
├── Properties/
│   ├── launchSettings.json
├── Services/
│   ├── Interfaces/
│       ├── IUserService.cs
│       ├── IPostService.cs
│       ├── IRoleService.cs
│   ├── Implementations/
│       ├── UserService.cs
│       ├── PostService.cs
│       ├── RoleService.cs
├── Program.cs
├── README.md
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Visual Studio 2022+
- Git

---

## 🐳 Run with Docker

```bash
docker-compose up --build -d
```
![image](https://github.com/user-attachments/assets/5399a9c6-db64-4c5f-82da-ff3a31d1939c)

This launches:
- ASP.NET Core API on `http://localhost:5000`
- PostgreSQL DB on port `5432`

> DB credentials are defined in `docker-compose.yml` and injected as environment variables.

---

## 🔐 JWT Authentication Flow

### 🔹 Register a New User

**Endpoint:**
```http
POST /api/Auth/register
```

**Request Body:**
```json
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "Test@1234",
  "confirmPassword": "Test@1234"
}
```

✅ Response:
```text
User created successfully!
```

---

### 🔹 Login to Get Token

**Endpoint:**
```http
POST /api/Auth/login
```

**Request Body:**
```json
{
  "username": "admin",
  "password": "Test@1234"
}
```

✅ Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiration": "2025-05-09T23:59:59Z"
}
```

📋 Copy the token and paste it into Swagger → **Authorize → `Bearer <token>`**

---

## 📘 Swagger UI

Visit:  
[http://localhost:5000/swagger](http://localhost:5000/swagger)

### ✅ Available Endpoints:

#### 🔐 AuthController:
- `POST /api/Auth/register`
- `POST /api/Auth/login`

#### 👤 UsersController:
- `GET /api/Users`
- `GET /api/Users/{id}`
- `PUT /api/Users/{id}`
- `DELETE /api/Users/{id}`

#### 📝 PostsController:
- `POST /api/Posts`
- `GET /api/Posts`
- `GET /api/Posts/user/{userId}`
- `PUT /api/Posts/{postId}`
- `DELETE /api/Posts/{postId}`

#### 🎭 RolesController:
- `POST /api/Roles`
- `GET /api/Roles`
- `GET /api/Roles/{id}`
- `PUT /api/Roles/{id}`
- `DELETE /api/Roles/{id}`

---

## ✅ Integration Tests via Swagger (Screenshots)

### 🧪 Register User Success  

### 🔐 Login Success – Get Token  

### 🔏 Authorize in Swagger UI  

### 📝 Call Protected Route with Token  
![a](https://github.com/user-attachments/assets/87b6be24-2265-46c1-90d8-a907268fcf25)
![b](https://github.com/user-attachments/assets/370176dc-f3dd-47ce-89e5-0ece793e1b96)
![C](https://github.com/user-attachments/assets/2b6c5015-33c5-4aee-8272-34e5f0e6e6d9)
![azz](https://github.com/user-attachments/assets/97c165cc-35e8-4c9b-be9c-bd829bb294c5)
![abhg](https://github.com/user-attachments/assets/0d61e9bc-d3ad-4d3b-b085-0cf7a804e034)

---

## 🧪 API Test Workflow Summary

| Test | Endpoint | Status |
|------|----------|--------|
| ✅ Register User | `/api/Auth/register` | ✔️ |
| ✅ Login & Get JWT | `/api/Auth/login` | ✔️ |
| ✅ Authorize Swagger | Token → Bearer | ✔️ |
| ✅ Create Post | `/api/Posts` | ✔️ |
| ✅ Get All Posts | `/api/Posts` | ✔️ |
| ✅ Update / Delete Post | `/api/Posts/{id}` | ✔️ |
| ✅ Role-based access (optional) | `/api/Roles` | ✔️ |

---

## 🔐 JWT Configuration (`appsettings.json`)

```json
"Jwt": {
  "Key": "thisIsMySuperSecureJwtKey!2025@ABC",
  "Issuer": "UserRoleApp",
  "Audience": "UserRoleApp"
}
```

> Ensure your key is at least **32 characters** long to avoid HS256 errors.

---
##Unit Test Result
![image](https://github.com/user-attachments/assets/cbe32c76-eefc-4f78-b180-96b8a0dc6825)


## ✨ Credits

Developed using:
- .NET 8 SDK  
- EF Core 8  
- PostgreSQL  
- Swagger UI  
- Visual Studio 2022  
- Docker/Docker Compose  

---

> 💬 Feel free to open issues or submit feature requests!

