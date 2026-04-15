# MongoDB Atlas Setup Guide

## Current Status

Your `server/.env` file has been updated with your MongoDB Atlas connection string.

## ⚠️ IMPORTANT: Add Your Password

You need to replace `<db_password>` with your actual MongoDB Atlas password.

### Step 1: Get Your Password

1. Go to MongoDB Atlas: https://cloud.mongodb.com
2. Login with your account
3. Go to "Database Access" in the left sidebar
4. Find your user `theamankalwar`
5. If you forgot the password, click "Edit" and set a new password

### Step 2: Update the .env File

Open `server/.env` and replace `<db_password>` with your actual password:

**Before:**

```env
MONGODB_URI=mongodb+srv://theamankalwar:<db_password>@cluster0.0ac7xl7.mongodb.net/college_management?retryWrites=true&w=majority&appName=Cluster0
```

**After (example with password "MyPass123"):**

```env
MONGODB_URI=mongodb+srv://theamankalwar:MyPass123@cluster0.0ac7xl7.mongodb.net/college_management?retryWrites=true&w=majority&appName=Cluster0
```

### Step 3: Whitelist Your IP Address

1. In MongoDB Atlas, go to "Network Access"
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Or add your current IP address
5. Click "Confirm"

### Step 4: Restart Backend Server

After updating the password:

```bash
# Stop the current backend (Ctrl+C in the terminal)
# Then restart:
cd server
npm run seed    # Seed the cloud database
npm run dev     # Start backend
```

### Step 5: Verify Connection

You should see:

```
Server running on port 5001
MongoDB Connected: cluster0.0ac7xl7.mongodb.net
```

---

## Quick Commands

### Update Password in .env

```bash
# Open the file
nano server/.env

# Or use any text editor
code server/.env
```

### Restart Backend

```bash
cd server
npm run dev
```

---

## Troubleshooting

### "Authentication failed"

- Check your password is correct
- Make sure there are no spaces in the password
- Special characters in password need to be URL encoded

### "IP not whitelisted"

- Go to Network Access in MongoDB Atlas
- Add your IP or allow all IPs (0.0.0.0/0)

### "Connection timeout"

- Check your internet connection
- Verify the cluster is running in MongoDB Atlas

---

## URL Encoding Special Characters

If your password contains special characters, encode them:

| Character | Encoded |
| --------- | ------- |
| @         | %40     |
| :         | %3A     |
| /         | %2F     |
| ?         | %3F     |
| #         | %23     |
| [         | %5B     |
| ]         | %5D     |

Example: If password is `Pass@123`, use `Pass%40123`

---

## Next Steps

1. Replace `<db_password>` in `server/.env`
2. Whitelist your IP in MongoDB Atlas
3. Restart the backend server
4. The app will now use cloud MongoDB!
