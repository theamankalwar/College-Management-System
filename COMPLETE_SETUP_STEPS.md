# 🚀 Complete Setup Steps - College Management System

Follow these steps **EXACTLY** in order:

---

## Part 1: MongoDB Atlas Setup (5 minutes)

### Step 1: Whitelist Your IP Address

1. Open your browser and go to: **https://cloud.mongodb.com**
2. **Login** with your MongoDB Atlas account
3. You should see your dashboard with "Cluster0"
4. On the **left sidebar**, click **"Network Access"**
5. Click the green **"+ ADD IP ADDRESS"** button
6. A popup will appear with two options:
   - Click **"ALLOW ACCESS FROM ANYWHERE"**
   - This will add `0.0.0.0/0` (all IPs)
7. Click the green **"Confirm"** button
8. **WAIT 1-2 MINUTES** for the change to take effect

### Step 2: Verify Database User

1. On the **left sidebar**, click **"Database Access"**
2. You should see user: **theamankalwar**
3. Make sure it shows "Read and write to any database"
4. If not, click "Edit" and give it "Atlas admin" role

---

## Part 2: Update Backend Configuration

### Step 3: Check Your .env File

Open `server/.env` and make sure it looks like this:

```env
PORT=5001
MONGODB_URI=mongodb+srv://theamankalwar:YOUR_ACTUAL_PASSWORD@cluster0.0ac7xl7.mongodb.net/college_management?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=development
```

**IMPORTANT:** Replace `YOUR_ACTUAL_PASSWORD` with your real MongoDB Atlas password!

**Example:**

- If your password is `MyPass123`, it should be:

```env
MONGODB_URI=mongodb+srv://theamankalwar:MyPass123@cluster0.0ac7xl7.mongodb.net/college_management?retryWrites=true&w=majority&appName=Cluster0
```

**If your password has special characters (@, #, $, etc.), encode them:**

- `@` becomes `%40`
- `#` becomes `%23`
- `$` becomes `%24`

---

## Part 3: Test and Seed Database

### Step 4: Test MongoDB Connection

Open a terminal and run:

```bash
cd server
node test-connection.js
```

**You should see:**

```
✅ Successfully connected to MongoDB Atlas!
```

**If you see an error:**

- Go back to Step 1 and make sure IP is whitelisted
- Wait 2 more minutes and try again
- Check your password in .env file

### Step 5: Seed the Database

Once connection test passes, run:

```bash
npm run seed
```

**You should see:**

```
Connected to MongoDB
Cleared existing data
Sample data inserted successfully!

Default Users Created:
Admin - username: admin, password: admin123
Teacher - username: teacher, password: teacher123
Student - username: student, password: student123
```

---

## Part 4: Start the Application

### Step 6: Start Backend Server

In the **same terminal** (still in server folder):

```bash
npm run dev
```

**You should see:**

```
Server running on port 5001
MongoDB Connected: cluster0.0ac7xl7.mongodb.net
```

✅ **Keep this terminal open!** Don't close it.

### Step 7: Start Frontend Server

Open a **NEW terminal** (second terminal) and run:

```bash
npm run dev
```

**You should see:**

```
VITE v5.1.4  ready in 500 ms
➜  Local:   http://localhost:5173/
```

✅ **Keep this terminal open too!**

---

## Part 5: Login and Test

### Step 8: Open the Application

1. Open your browser
2. Go to: **http://localhost:5173**
3. You should see a beautiful landing page with two cards:
   - **User Login** (Blue card)
   - **Admin Login** (Red card)

### Step 9: Test Admin Login

1. Click on **"Admin Login"** (red card)
2. Enter credentials:
   - Username: `admin`
   - Password: `admin123`
3. Click **"Admin Sign In"**
4. You should be redirected to the dashboard!

### Step 10: Test User Login

1. Logout (click on your profile → Logout)
2. You'll be back at the landing page
3. Click on **"User Login"** (blue card)
4. Enter credentials:
   - Username: `teacher` or `student`
   - Password: `teacher123` or `student123`
5. Click **"Sign In"**
6. You should see the dashboard!

---

## 🎉 Success Checklist

After completing all steps, you should have:

- [ ] MongoDB Atlas IP whitelisted (0.0.0.0/0)
- [ ] Password correctly set in server/.env
- [ ] Connection test passed
- [ ] Database seeded with sample data
- [ ] Backend running on port 5001
- [ ] Frontend running on port 5173
- [ ] Can login as admin
- [ ] Can login as teacher/student
- [ ] Can see dashboard with data
- [ ] Can add/edit/delete students, teachers, etc.

---

## 🐛 Troubleshooting

### "Failed to fetch" error

- Backend is not running
- Go back to Step 6

### "Connection timeout" during seed

- IP not whitelisted
- Go back to Step 1 and wait 2 minutes

### "Authentication failed"

- Wrong password in .env
- Go back to Step 3

### "Port already in use"

```bash
lsof -ti:5001 | xargs kill -9
```

Then restart backend (Step 6)

### Can't type in login form

- This is fixed in the new code
- Make sure you're using the latest version

---

## 📝 Quick Reference

### Login Credentials

**Admin:**

- URL: http://localhost:5173 → Click "Admin Login"
- Username: `admin`
- Password: `admin123`

**Teacher:**

- URL: http://localhost:5173 → Click "User Login"
- Username: `teacher`
- Password: `teacher123`

**Student:**

- URL: http://localhost:5173 → Click "User Login"
- Username: `student`
- Password: `student123`

### Important URLs

- Frontend: http://localhost:5173
- Backend API: http://localhost:5001
- Health Check: http://localhost:5001/api/health
- MongoDB Atlas: https://cloud.mongodb.com

### Important Commands

```bash
# Test MongoDB connection
cd server
node test-connection.js

# Seed database
npm run seed

# Start backend
npm run dev

# Start frontend (new terminal)
npm run dev

# Kill port 5001
lsof -ti:5001 | xargs kill -9
```

---

## 🎯 What You'll Be Able to Do

Once everything is running:

✅ Login as Admin, Teacher, or Student
✅ View dashboard with real-time statistics
✅ Add new students
✅ Add new teachers
✅ Mark attendance
✅ Add marks (with auto-grade calculation)
✅ Create timetable
✅ Edit any record
✅ Delete any record
✅ Logout and login again

All data is stored in MongoDB Atlas (cloud database)!

---

## Need Help?

If you get stuck at any step:

1. Read the error message carefully
2. Check the troubleshooting section above
3. Make sure you completed ALL previous steps
4. Verify both terminals are still running
5. Check MongoDB Atlas Network Access is set to 0.0.0.0/0

**Most common issue:** IP not whitelisted in MongoDB Atlas Network Access!

---

Good luck! 🚀
