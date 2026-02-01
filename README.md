# BIDE Website

**BIDE** is a web-based Integrated Development Environment (IDE) designed to streamline the coding workflow directly within the browser. This repository houses the source code for the platform, split into a React-based frontend and an Express-based backend.

## 📂 Project Structure

The codebase is organized as a monorepo:

```text
bide-ide/
│
├── client/        # Frontend (React)
├── server/        # Backend (Node + Express)
├── package.json   # Root scripts (optional)
└── README.md
```

- **[`client/`](./client)**: The frontend application, initialized with [Vite](https://vitejs.dev/) and [React](https://react.dev/).
- **[`server/`](./server)**: The backend API, utilizing [Express](https://expressjs.com/) and configured for secure authentication and API documentation.

## 🛠️ Technology Stack

### Frontend (Client)
- **Framework**: React 19
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Linting**: ESLint

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express
- **Authentication**: JSON Web Tokens (JWT) & Bcrypt
- **Documentation**: Swagger (Swagger UI Express, Swagger JSDoc)
- **Utilities**: Dotenv, CORS

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation & Setup

#### 1. Client Setup
Navigate to the client directory to install dependencies and start the development server:

```bash
cd client
npm install
npm run dev
```
The client application will typically run on `http://localhost:5173`.

#### 2. Server Setup
Navigate to the server directory to install dependencies:

```bash
cd server
npm install
```
*Note: The server environment is currently initialized with necessary dependencies (Express, Nodemon, Swagger, etc.). Application logic and entry points are in active development.*

## 🤝 Contributing

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the **ISC License**.
