# 🚀 Setup MongoDB & Start Application

## You Need to Install MongoDB First!

### Quick Install (5 minutes):

```bash
# Step 1: Add MongoDB tap
brew tap mongodb/brew

# Step 2: Install MongoDB
brew install mongodb-community

# Step 3: Start MongoDB
brew services start mongodb-community

# Step 4: Verify it's running
brew services list | grep mongodb
```

You should see: `mongodb-community started`

---

## Then Start Your Application:

### Terminal 1 - Backend:

```bash
cd server
npm run seed    # First time only - creates sample data
npm run dev     # Start backend server
```

Wait for: `✓ Server running on port 5001`

### Terminal 2 - Frontend:

```bash
npm run dev
```

Wait for: `➜ Local: http://localhost:5173/`

### Browser:

Open: http://localhost:5173

---

## 🎯 Login Credentials

After setup, use these to login:

**Admin Login:**

- Username: `admin`
- Password: `admin123`

**User Login:**

- Teacher: `teacher` / `teacher123`
- Student: `student` / `student123`

---

## ⚡ Alternative: Use Cloud MongoDB (No Installation)

If you don't want to install MongoDB locally:

### 1. Create Free MongoDB Atlas Account:

- Go to: https://www.mongodb.com/cloud/atlas/register
- Sign up (free)
- Create a free cluster

### 2. Get Connection String:

- Click "Connect" → "Connect your application"
- Copy the connection string

### 3. Update `server/.env`:

```env
PORT=5001
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/college_management
NODE_ENV=development
```

### 4. Start servers:

```bash
# Terminal 1
cd server
npm run seed
npm run dev

# Terminal 2
npm run dev
```

---

## 📝 Summary

**Choose ONE option:**

### Option A: Local MongoDB (Recommended for Development)

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Option B: Cloud MongoDB (No Installation)

- Sign up at MongoDB Atlas
- Get connection string
- Update server/.env

Then start both servers and you're ready to go! 🎉
