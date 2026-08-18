# Lab Task - Requirements

## Tasks:
1. Initialize Express project and folder structure.
2. Setup MongoDB connection using Mongoose.
3. Define User model schema.
4. Define Task model schema.
5. Create test endpoint `GET /api/health`.
6. Test using Postman.

## Models:

### User (`models/User.js`):
- `name`: String (required)
- `email`: String (required, unique)
- `password`: String (required)
- `role`: String (default: "user")

### Task (`models/Task.js`):
- `title`: String (required)
- `description`: String
- `status`: String (default: "pending")
- `priority`: String (default: "medium")
- `dueDate`: Date
