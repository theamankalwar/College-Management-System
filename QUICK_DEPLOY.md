# ⚡ Quick Deploy Guide

## 1️⃣ Push to GitHub (5 minutes)

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/college-management-system.git
git branch -M main
git push -u origin main
```

---

## 2️⃣ Deploy Backend to Render (10 minutes)

1. Go to https://render.com
2. Sign up with GitHub
3. Click **"New +"** → **"Web Service"**
4. Select your repository
5. Configure:
   - Name: `college-management-backend`
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add Environment Variables:

   ```
   PORT=5001
   MONGODB_URI=mongodb+srv://theamankalwar:helloworld@cluster0.0ac7xl7.mongodb.net/college_management?retryWrites=true&w=majority&appName=Cluster0
   NODE_ENV=production
   ```

7. Click **"Create Web Service"**
8. **Copy the backend URL** (e.g., `https://xyz.onrender.com`)

---

## 3️⃣ Update Frontend API URL

Edit `.env` in project root:

```env
VITE_API_URL=https://YOUR_BACKEND_URL.onrender.com/api
```

Commit and push:

```bash
git add .env
git commit -m "Update API URL"
git push
```

---

## 4️⃣ Deploy Frontend to Render (10 minutes)

1. Click **"New +"** → **"Static Site"**
2. Select your repository
3. Configure:
   - Name: `college-management-frontend`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
4. Add Environment Variable:

   ```
   VITE_API_URL=https://YOUR_BACKEND_URL.onrender.com/api
   ```

5. Click **"Create Static Site"**

---

## 5️⃣ Update CORS in Backend

Edit `server/server.js`:

```javascript
app.use(
  cors({
    origin: ["http://localhost:5173", "https://YOUR_FRONTEND_URL.onrender.com"],
    credentials: true,
  }),
);
```

Push changes:

```bash
git add server/server.js
git commit -m "Update CORS"
git push
```

---

## ✅ Done!

Your app is live at: `https://YOUR_FRONTEND_URL.onrender.com`

Login with:

- Admin: `admin` / `admin123`
- Teacher: `teacher` / `teacher123`
- Student: `student` / `student123`

---

## 🔥 Pro Tips

1. **Keep backend alive:** Use UptimeRobot to ping every 14 minutes
2. **Custom domain:** Add in Render settings
3. **Auto-deploy:** Push to GitHub = auto-deploy on Render

---

Total time: ~25 minutes 🚀
