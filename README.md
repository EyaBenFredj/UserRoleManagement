

# User & Role Management - Frontend (Angular)

## 📚 Project Overview

This is the **frontend** of the User & Role Management System, built with **Angular**. It connects to a backend REST API developed using **.NET Core 8**, with **PostgreSQL** as the database. The app supports user authentication (via JWT), role-based access control, and CRUD operations for users and posts.

> 🔗 **Backend Repository**: _[Add the link here]_

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

## 📸 Screenshots

> _Include screenshots of your login page, dashboard, user management, etc._

| Login Page        | Dashboard          | Role Management     |
||![image](https://github.com/user-attachments/assets/76fe91b2-db92-4194-9c43-4c4d95cb49d8)
| |![image](https://github.com/user-attachments/assets/d6f83969-a4f6-4da5-bddc-cf0a78c1abf0)
| | ![image](https://github.com/user-attachments/assets/5cb61a37-95cd-4a85-8ad9-43d186409ba6)
|


_📁 Place your screenshots in `/screenshots` folder and update links accordingly._

---

## 📦 Deployment

1. Build the app:
   ```bash
   ng build --prod
   ```

2. Deploy the contents of `dist/` to your preferred hosting (e.g., Firebase, Netlify, Vercel, Nginx).

---

## 🔁 CI/CD

A sample GitHub Actions pipeline is included:

```
.github/workflows/ci-cd-pipeline.yml
```

It handles linting, building, and testing on push to `main`.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes
4. Push to the branch
5. Open a pull request

---

## 🧾 License

This project is licensed under the MIT License.

---

Let me know if you'd like a sample screenshot layout or want help creating your first service or interceptor file.
