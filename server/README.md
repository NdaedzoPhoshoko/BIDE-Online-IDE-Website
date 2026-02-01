# BIDE Backend (Server)
 
This folder contains the backend for the Browser IDE (BIDE). The server is a Node.js + Express app configured with Sequelize to connect to a Supabase-hosted PostgreSQL database via the session pooler. Swagger UI is enabled for API documentation, and a health endpoint is provided to verify database connectivity.
 
## Overview
 
- Runtime: Node.js on Express
- ORM: Sequelize (PostgreSQL)
- Docs: Swagger UI
- Status: Health endpoint with DB check
 
## Configuration Summary
 
- Server bootstrap: [src/server.js](file:///c:/Users/Cleme/Desktop/BIDE%20Website/server/src/server.js)
- Express app and endpoints: [src/app.js](file:///c:/Users/Cleme/Desktop/BIDE%20Website/server/src/app.js)
- Database connection: [src/config/db.js](file:///c:/Users/Cleme/Desktop/BIDE%20Website/server/src/config/db.js)
- Swagger config: [src/config/swagger.js](file:///c:/Users/Cleme/Desktop/BIDE%20Website/server/src/config/swagger.js)
- Environment variables: [.env](file:///c:/Users/Cleme/Desktop/BIDE%20Website/server/.env)
 
## Environment Variables
 
Set in `.env`:
 
```env
PORT=5000
DATABASE_URL=postgresql://postgres.hhkecdkjwbtemilugflr:[YOUR-PASSWORD]@aws-1-eu-west-1.pooler.supabase.com:5432/postgres
```
 
- Use the Supabase session pooler host (`*.pooler.supabase.com`) on port `5432`.
- If your password contains special characters, URL‑encode them in connection URLs (for example, `@` → `%40`). In GUI tools like pgAdmin, you should paste the raw password.
 
## Status Endpoints
 
- Health: `GET /api/health`
  - Returns JSON including `status` and `db` fields indicating DB connectivity.
- Root: `GET /`
  - Returns a simple text message confirming the API is running.
 
Both are defined in [app.js](file:///c:/Users/Cleme/Desktop/BIDE%20Website/server/src/app.js).
 
## Swagger Documentation
 
- UI: `http://localhost:5000/api-docs`
- Config: [src/config/swagger.js](file:///c:/Users/Cleme/Desktop/BIDE%20Website/server/src/config/swagger.js)
- Sources: Annotations are loaded from `src/routes/*.js` and `src/docs/*.js`.
 
## Database Connectivity
 
- Connection is initialized in [db.js](file:///c:/Users/Cleme/Desktop/BIDE%20Website/server/src/config/db.js) using `process.env.DATABASE_URL` and SSL options suitable for Supabase.
- On server start, logs display:
  - `✅ PostgreSQL Connection has been established successfully.`
  - `🚀 Server running on port 5000`
 
## Start/Develop
 
From this folder:
 
```bash
npm run dev
```
 
Then open:
 
- Health: `http://localhost:5000/api/health`
- Docs: `http://localhost:5000/api-docs`
 
## pgAdmin Connection (Session Pooler)
 
- Host: `aws-1-eu-west-1.pooler.supabase.com`
- Port: `5432`
- Database: `postgres`
- Username: `postgres.hhkecdkjwbtemilugflr`
- Password: your DB password (raw, not URL‑encoded)
- SSL mode: `require`
 
## Folder Structure (Server)
 
```text
server/
│
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   ├── db.js
│   │   └── swagger.js
│   ├── models/
│   │   └── Example.js
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   └── docs/
│
├── .env
├── package.json
└── nodemon.json
```
 
This configuration is ready for adding actual routes, controllers, middleware, and models.*** End Patch```}E_TIMER to=functions.apply_patch الرغم of the patch being quite long? It's fine. Let's proceed. We'll need to mark the todo completed after writing. We'll call TodoWrite to complete. Then respond to user. We'll include code references and keep structured bullets. We'll not run lint since it's docs. We'll finish. 
