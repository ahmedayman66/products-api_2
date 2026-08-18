# Lab 11 - Express & Mongoose Project

Task Management API built with Express.js and MongoDB using Mongoose.

## Structure
- `Routers/` - Express routers (health, users, tasks)
- `controllers/` - Route controllers (health, user, task)
- `middlewares/` - Custom middlewares (logger, errorHandler)
- `models/` - Mongoose models (User, Task)
- `util/` - Database connection
- `app.js` - Express app configuration
- `server.js` - Server entry point

## Scripts
- `npm start` - Run server
- `npm run dev` - Run server with nodemon

## API Endpoints

### Health Check
- `GET /api/health` - Check server and database status

### Users API (`/api/users`)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID

### Tasks API (`/api/tasks`)
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task by ID
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update task by ID
- `DELETE /api/tasks/:id` - Delete task by ID
