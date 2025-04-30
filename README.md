

# User & Role Management - Frontend (Angular)

## 📚 Project Overview

This is the **frontend** of the User & Role Management System, built with **Angular**. It connects to a backend REST API developed using **.NET Core 8**, with **PostgreSQL** as the database. The app supports user authentication (via JWT), role-based access control, and CRUD operations for users and posts.

> 🔗 **Backend Repository**:(https://github.com/EyaBenFredj/UserRoleManagement/tree/master)

---

## 🛠️ Tech Stack

- **Frontend**: Angular 16+
- **Authentication**: JWT
- **Routing**: Angular Router
- **HTTP Client**: Angular HttpClient
- **Testing**: Jasmine, Karma
- **CI/CD**: GitHub Actions (via `.github/workflows`)

---

## ⚙️ Development Environment

- **Editor**: Visual Studio Code / WebStorm
- **Node.js**: v18 or newer
- **Angular CLI**: v16+

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed:
  ```bash
  node -v
  npm -v
  ```

- Angular CLI installed:
  ```bash
  npm install -g @angular/cli
  ```

---

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/user-role-management-frontend.git
   cd user-role-management-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create the file `src/environments/environment.ts`:
   ```ts
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:5000/api' // Replace with actual API base URL
   };
   ```

4. **Run the App**
   ```bash
   ng serve
   ```
   Visit: `http://localhost:4200/`

---

## 📂 Project Structure

```
user-role-management-frontend/
├── .github/
│   └── workflows/
│       └── ci-cd-pipeline.yml
├── src/
│   ├── app/
│   │   ├── guards/           # Route guards (e.g., AuthGuard, RoleGuard)
│   │   ├── interceptors/     # HTTP interceptors (e.g., JWT token)
│   │   ├── pages/
│   │   │   ├── dashboard/    # Admin/User dashboard components
│   │   │   ├── login/        # Login form + logic
│   │   │   ├── register/     # User registration
│   │   │   ├── roles/        # Role listing/assignment UI
│   │   │   ├── settings/     # User profile/settings
│   │   │   ├── users/        # Manage user list, details, and actions
│   │   ├── services/         # API service layer for HTTP calls
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔐 Authentication & Authorization

- **JWT** tokens stored in `localStorage`.
- **Interceptors** automatically attach the token to requests.
- **Route guards** protect admin/user-only routes based on roles.

---

## 🧪 Testing

- Run unit tests:
  ```bash
  ng test
  ```

- (Optional) Run E2E tests:
  ```bash
  ng e2e
  ```

---





### 👉 Angular Frontend Pages
![image](https://github.com/user-attachments/assets/76fe91b2-db92-4194-9c43-4c4d95cb49d8)
![image](https://github.com/user-attachments/assets/d6f83969-a4f6-4da5-bddc-cf0a78c1abf0)
![image](https://github.com/user-attachments/assets/5cb61a37-95cd-4a85-8ad9-43d186409ba6)
---

## 📦 Deployment

1. Build:
   ```bash
   ng build --prod
   ```

2. Deploy the contents of `dist/` to your hosting (e.g., Firebase, Netlify, Vercel, NGINX)

---

## 🔁 CI/CD Pipeline

A GitHub Actions workflow is configured to build either the frontend or backend based on the branch pushed to:

- `main` → Angular frontend build
- `master` → .NET Core backend build

### `.github/workflows/ci-cd-pipeline.yml`

```yaml
on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

jobs:
  build-frontend:
    if: github.ref_name == 'main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: |
          npm install
          npm run build

  build-backend:
    if: github.ref_name == 'master'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-dotnet@v4
        with:
          dotnet-version: 8.0.x
      - run: |
          dotnet restore
          dotnet build --configuration Release
```

### CI/CD Screenshot 📸
![CI/CD Workflow](https://github.com/user-attachments/assets/c4653e0c-5caa-447f-ad14-edaf3d395113)

---

## 🐳 Dockerization

### 🔨 Dockerfile (Frontend)

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/* /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 🔧 Docker Commands

#### Build the Image
```bash
docker build -t user-role-management-frontend .
```

#### Run the Container
```bash
docker run -d -p 4200:80 --name frontend-container user-role-management-frontend
```

#### Stop & Remove Container
```bash
docker stop frontend-container
docker rm frontend-container
```

### Docker Screenshot 📸
![Docker Build](https://github.com/user-attachments/assets/4edd455c-bb3c-4989-a937-1065da7cc55c)

---

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch: `git checkout -b feature/my-feature`  
3. Commit your changes  
4. Push to your fork  
5. Open a pull request

---


