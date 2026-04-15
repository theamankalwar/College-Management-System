# 🚀 Quick Start Guide

## The Problem: "Failed to Fetch"

This means your **backend server is not running**. Follow these steps:

---

## ✅ Solution: Start Both Servers

### Terminal 1️⃣ - Backend Server

```bash
cd server
npm run dev
```

**Wait for this message:**

```
✓ Server running on port 5001
✓ MongoDB Connected: localhost
```

✅ **Keep this terminal open!**

---

### Terminal 2️⃣ - Frontend Server

Open a **NEW terminal** and run:

```bash
npm run dev
```

**Wait for this message:**

```
➜  Local:   http://localhost:5173/
```

✅ **Keep this terminal open too!**

---

### 3️⃣ - Open Browser

Go to: **http://localhost:5173**

You should see the landing page with User Login and Admin Login options.

---

## 🎯 Login Credentials

### User Login

- **Teacher**: `teacher` / `teacher123`
- **Student**: `student` / `student123`

### Admin Login

- **Admin**: `admin` / `admin123`

---

## ⚠️ Before Starting

Make sure MongoDB is running:

```bash
# Start MongoDB
brew services start mongodb-community

# Check if it's running
brew services list | grep mongodb
```

---

## 🔧 First Time Setup

If you haven't set up the database yet:

```bash
# 1. Install backend dependencies
cd server
npm install

# 2. Seed the database
npm run seed

# 3. Install frontend dependencies
cd ..
npm install
```

---

## 📝 Quick Commands

### Start Backend

```bash
cd server && npm run dev
```

### Start Frontend (in new terminal)

```bash
npm run dev
```

### Seed Database

```bash
cd server && npm run seed
```

### Check Backend Health

```bash
curl http://localhost:5001/api/health
```

---

## 🐛 Troubleshooting

### "Port 5001 already in use"

```bash
lsof -ti:5001 | xargs kill -9
cd server && npm run dev
```

### "MongoDB connection failed"

```bash
brew services start mongodb-community
```

### "Cannot find module"

```bash
cd server && npm install
cd .. && npm install
```

---

## ✨ You're Ready!

Once both servers are running:

1. Open http://localhost:5173
2. Choose User or Admin login
3. Enter credentials
4. Start managing your college! 🎓

---

## 📊 What Should Be Running

| Service  | Port  | Status     |
| -------- | ----- | ---------- |
| MongoDB  | 27017 | ✅ Running |
| Backend  | 5001  | ✅ Running |
| Frontend | 5173  | ✅ Running |

All three must be running for the app to work!
