# How to Start the Application

## The "Failed to Fetch" Error

This error means the **backend server is not running**. You need to start BOTH the backend and frontend servers.

## Step-by-Step Startup Guide

### Step 1: Start MongoDB (if not already running)

```bash
# For macOS with Homebrew
brew services start mongodb-community

# Or run manually in a terminal
mongod
```

### Step 2: Start the Backend Server

Open a **NEW TERMINAL** and run:

```bash
cd server
npm run dev
```

You should see:

```
Server running on port 5001
MongoDB Connected: localhost
```

**Keep this terminal open!** The backend must stay running.

### Step 3: Start the Frontend Server

Open **ANOTHER NEW TERMINAL** and run:

```bash
npm run dev
```

You should see:

```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

**Keep this terminal open too!**

### Step 4: Open the Application

Open your browser and go to: `http://localhost:5173`

## Quick Checklist

Before logging in, make sure:

- [ ] MongoDB is running
- [ ] Backend server is running on port 5001
- [ ] Frontend server is running on port 5173
- [ ] You can see both terminal windows with servers running
- [ ] No error messages in either terminal

## Testing the Backend

To verify the backend is running, open a new terminal and run:

```bash
curl http://localhost:5001/api/health
```

You should see:

```json
{ "status": "OK", "message": "Server is running" }
```

## Common Issues

### Issue 1: "Port already in use"

```bash
# Kill the process using the port
lsof -ti:5001 | xargs kill -9
```

### Issue 2: "MongoDB connection error"

Make sure MongoDB is running:

```bash
brew services list | grep mongodb
```

### Issue 3: "Cannot find module"

Install dependencies:

```bash
# In server directory
cd server
npm install

# In root directory
cd ..
npm install
```

## Seed the Database (First Time Only)

If you haven't seeded the database yet:

```bash
cd server
npm run seed
```

This creates:

- Sample data (students, teachers, etc.)
- Default users:
  - Admin: `admin` / `admin123`
  - Teacher: `teacher` / `teacher123`
  - Student: `student` / `student123`

## Summary

You need **3 things running**:

1. MongoDB (database)
2. Backend server (port 5001)
3. Frontend server (port 5173)

Once all three are running, you can login successfully!
