# ⚠️ START HERE - Fix "Failed to Fetch" Error

## The Issue

Your backend server is **NOT RUNNING**. That's why you're getting "Failed to Fetch".

---

## 🎯 Follow These Steps EXACTLY

### Step 1: Start MongoDB

Open a terminal and run:

```bash
brew services start mongodb-community
```

Wait 2-3 seconds, then verify:

```bash
brew services list | grep mongodb
```

You should see: `mongodb-community@7.0 started`

---

### Step 2: Start Backend Server

**Open a NEW terminal** (keep the first one open) and run:

```bash
cd "College Management System/server"
npm run dev
```

**WAIT** until you see:

```
Server running on port 5001
MongoDB Connected: localhost
```

✅ **DO NOT CLOSE THIS TERMINAL!**

---

### Step 3: Start Frontend Server

**Open ANOTHER NEW terminal** and run:

```bash
cd "College Management System"
npm run dev
```

**WAIT** until you see:

```
➜  Local:   http://localhost:5173/
```

✅ **DO NOT CLOSE THIS TERMINAL EITHER!**

---

### Step 4: Open Browser

Now open your browser and go to:

```
http://localhost:5173
```

You should see the landing page. Try logging in now!

---

## 🔐 Login Credentials

### For User Login (Blue Card):

- Username: `teacher` or `student`
- Password: `teacher123` or `student123`

### For Admin Login (Red Card):

- Username: `admin`
- Password: `admin123`

---

## ✅ Checklist

Before trying to login, make sure:

- [ ] MongoDB is running (`brew services list | grep mongodb` shows "started")
- [ ] Backend terminal is open and shows "Server running on port 5001"
- [ ] Frontend terminal is open and shows "Local: http://localhost:5173/"
- [ ] Browser is open at http://localhost:5173
- [ ] You can see the landing page with two login cards

---

## 🆘 Still Not Working?

### If backend won't start:

```bash
# Install dependencies
cd server
npm install

# Try starting again
npm run dev
```

### If you see "Port already in use":

```bash
# Kill the process
lsof -ti:5001 | xargs kill -9

# Start backend again
cd server
npm run dev
```

### If MongoDB won't start:

```bash
# Try starting manually
mongod --config /opt/homebrew/etc/mongod.conf
```

---

## 📸 What You Should See

### Terminal 1 (MongoDB):

```
mongodb-community@7.0 started
```

### Terminal 2 (Backend):

```
[nodemon] starting `node server.js`
Server running on port 5001
MongoDB Connected: localhost
```

### Terminal 3 (Frontend):

```
VITE v5.1.4  ready in 500 ms
➜  Local:   http://localhost:5173/
```

### Browser:

- Landing page with two cards (User Login and Admin Login)
- No errors in console (press F12 to check)

---

## 🎉 Success!

Once all three are running, the "Failed to Fetch" error will be gone and you can login successfully!

**Remember:** You need to keep all three terminals open while using the app!
