# Setup Guide - College Management System

## Backend Setup

1. Navigate to server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```bash
cp .env.example .env
```

4. Make sure MongoDB is running (install if needed):

```bash
# For macOS with Homebrew
brew services start mongodb-community

# Or run manually
mongod
```

5. Start the backend server:

```bash
npm run dev
```

Backend will run on `http://localhost:5001`

## Frontend Setup

1. Navigate to project root (if in server directory):

```bash
cd ..
```

2. Install dependencies (if not already installed):

```bash
npm install
```

3. Start the frontend:

```bash
npm run dev
```

Frontend will run on `http://localhost:5173` (or another port shown in terminal)

## Testing the Connection

1. Make sure both backend and frontend are running
2. Open your browser and go to the frontend URL
3. Navigate to Students, Teachers, Attendance, Marks, or Timetable pages
4. You should see "Loading..." initially, then either data or an error message

## Adding Sample Data

You can add data through the API using tools like Postman or curl:

```bash
# Add a student
curl -X POST http://localhost:5001/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "rollNumber": "CS001",
    "course": "Computer Science",
    "email": "john@example.com",
    "status": "Active"
  }'
```

## Troubleshooting

- If you see "Failed to fetch" errors, make sure the backend is running on port 5001
- If port 5001 is in use, change it in `server/.env` and `.env` files
- Make sure MongoDB is running before starting the backend
- Check browser console for detailed error messages
