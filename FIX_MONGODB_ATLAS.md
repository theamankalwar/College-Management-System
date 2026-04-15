# Fix MongoDB Atlas Connection

## The connection is timing out. Here's how to fix it:

### Step 1: Whitelist Your IP Address (MOST COMMON ISSUE)

1. Go to MongoDB Atlas: https://cloud.mongodb.com
2. Click on your project
3. Click "Network Access" in the left sidebar
4. Click "Add IP Address"
5. Click "Allow Access from Anywhere" (for development)
   - Or click "Add Current IP Address"
6. Click "Confirm"
7. **Wait 1-2 minutes** for the change to take effect

### Step 2: Verify Your Password

Open `server/.env` and check:

- Password has no `<` or `>` brackets
- Password is correct
- No extra spaces

**Example of CORRECT format:**

```env
MONGODB_URI=mongodb+srv://theamankalwar:YourActualPassword@cluster0.0ac7xl7.mongodb.net/college_management?retryWrites=true&w=majority&appName=Cluster0
```

**Example of WRONG format:**

```env
MONGODB_URI=mongodb+srv://theamankalwar:<db_password>@cluster0...
```

### Step 3: URL Encode Special Characters

If your password has special characters, encode them:

| Character | Replace With |
| --------- | ------------ |
| @         | %40          |
| #         | %23          |
| $         | %24          |
| %         | %25          |
| ^         | %5E          |
| &         | %26          |
| \*        | %2A          |
| (         | %28          |
| )         | %29          |

**Example:**

- Password: `Pass@123#`
- Encoded: `Pass%40123%23`

### Step 4: Test Connection

After fixing the above, test the connection:

```bash
cd server
npm run seed
```

You should see:

```
Connected to MongoDB
Cleared existing data
Sample data inserted successfully!
```

### Step 5: Start Backend

```bash
npm run dev
```

You should see:

```
Server running on port 5001
MongoDB Connected: cluster0.0ac7xl7.mongodb.net
```

---

## Quick Checklist

- [ ] IP address is whitelisted in MongoDB Atlas Network Access
- [ ] Password in .env is correct (no brackets)
- [ ] Special characters in password are URL encoded
- [ ] Waited 1-2 minutes after whitelisting IP
- [ ] Internet connection is working

---

## Alternative: Use Local MongoDB

If you're having trouble with Atlas, you can use local MongoDB instead:

### Update server/.env:

```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/college_management
NODE_ENV=development
```

### Start local MongoDB:

```bash
brew services start mongodb-community@7.0
```

### Seed and start:

```bash
cd server
npm run seed
npm run dev
```

---

## Need Help?

1. Check MongoDB Atlas dashboard - is your cluster running?
2. Check Network Access - is your IP whitelisted?
3. Check Database Access - is your user created with correct password?
4. Try "Allow Access from Anywhere" (0.0.0.0/0) for testing

Once you fix the Network Access, everything should work!
