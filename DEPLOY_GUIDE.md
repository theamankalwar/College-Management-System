# 🚀 Deploy to GitHub and Render

## Part 1: Push to GitHub

### Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: College Management System"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** icon (top right)
3. Click **"New repository"**
4. Repository name: `college-management-system`
5. Description: `Full-stack MERN College Management System`
6. Choose **Public** or **Private**
7. **DO NOT** check "Initialize with README" (we already have files)
8. Click **"Create repository"**

### Step 3: Connect and Push to GitHub

GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/college-management-system.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Part 2: Deploy Backend to Render

### Step 1: Create Render Account

1. Go to https://render.com
2. Sign up with GitHub (recommended)
3. Authorize Render to access your repositories

### Step 2: Create Web Service for Backend

1. Click **"New +"** button
2. Select **"Web Service"**
3. Connect your GitHub repository
4. Configure:

**Settings:**

- **Name:** `college-management-backend`
- **Region:** Choose closest to you
- **Branch:** `main`
- **Root Directory:** `server`
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Instance Type:** `Free`

**Environment Variables:**
Click "Add Environment Variable" and add:

```
PORT=5001
MONGODB_URI=mongodb+srv://theamankalwar:helloworld@cluster0.0ac7xl7.mongodb.net/college_management?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=production
```

5. Click **"Create Web Service"**
6. Wait 5-10 minutes for deployment
7. **Copy the URL** (e.g., `https://college-management-backend.onrender.com`)

### Step 3: Test Backend

Once deployed, test:

```
https://your-backend-url.onrender.com/api/health
```

Should return: `{"status":"OK","message":"Server is running"}`

---

## Part 3: Deploy Frontend to Render

### Step 1: Update Frontend API URL

Before deploying frontend, update the API URL:

**Edit `.env` in project root:**

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

Replace `your-backend-url` with your actual Render backend URL.

**Commit the change:**

```bash
git add .env
git commit -m "Update API URL for production"
git push
```

### Step 2: Create Static Site for Frontend

1. In Render dashboard, click **"New +"**
2. Select **"Static Site"**
3. Connect your GitHub repository
4. Configure:

**Settings:**

- **Name:** `college-management-frontend`
- **Branch:** `main`
- **Root Directory:** (leave empty)
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

**Environment Variables:**

```
VITE_API_URL=https://your-backend-url.onrender.com/api
```

5. Click **"Create Static Site"**
6. Wait 5-10 minutes for deployment
7. **Copy the URL** (e.g., `https://college-management-frontend.onrender.com`)

---

## Part 4: Update Backend CORS

Your backend needs to allow requests from your frontend URL.

**Edit `server/server.js`:**

Find this line:

```javascript
app.use(cors());
```

Replace with:

```javascript
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://college-management-frontend.onrender.com", // Your frontend URL
    ],
    credentials: true,
  }),
);
```

**Commit and push:**

```bash
git add server/server.js
git commit -m "Update CORS for production"
git push
```

Render will automatically redeploy the backend.

---

## Part 5: Seed Production Database

After backend is deployed, seed the database:

1. Go to your backend URL: `https://your-backend-url.onrender.com`
2. You can seed via API or manually add data through the frontend

Or create a seed endpoint (optional):

```javascript
// In server/server.js
app.post("/api/seed", async (req, res) => {
  // Add authentication check here
  // Run seed logic
});
```

---

## 🎉 Your App is Live!

**Frontend URL:** `https://college-management-frontend.onrender.com`
**Backend URL:** `https://college-management-backend.onrender.com`

### Login Credentials:

- Admin: `admin` / `admin123`
- Teacher: `teacher` / `teacher123`
- Student: `student` / `student123`

---

## 📝 Important Notes

### Free Tier Limitations:

- Backend spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- 750 hours/month free (enough for one service)

### Keep Backend Alive (Optional):

Use a service like UptimeRobot to ping your backend every 14 minutes:

- URL to ping: `https://your-backend-url.onrender.com/api/health`

### Custom Domain (Optional):

1. In Render dashboard, go to your site
2. Click "Settings"
3. Scroll to "Custom Domain"
4. Add your domain

---

## 🐛 Troubleshooting

### Backend not starting:

- Check Render logs
- Verify environment variables
- Check MongoDB connection string

### Frontend can't connect to backend:

- Verify VITE_API_URL is correct
- Check CORS settings in backend
- Check browser console for errors

### Database connection failed:

- Verify MongoDB Atlas IP whitelist includes `0.0.0.0/0`
- Check connection string in environment variables

---

## 🔄 Future Updates

To update your deployed app:

```bash
# Make changes to your code
git add .
git commit -m "Your update message"
git push
```

Render will automatically detect the push and redeploy!

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Backend deployed to Render
- [ ] Backend environment variables set
- [ ] Backend health check working
- [ ] Frontend API URL updated
- [ ] Frontend deployed to Render
- [ ] CORS configured correctly
- [ ] Database seeded
- [ ] Can login and use the app
- [ ] All features working

---

Congratulations! Your College Management System is now live! 🎊
