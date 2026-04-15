# Install MongoDB on macOS

## Option 1: Install MongoDB with Homebrew (Recommended)

### Step 1: Install MongoDB

```bash
brew tap mongodb/brew
brew install mongodb-community
```

### Step 2: Start MongoDB

```bash
brew services start mongodb-community
```

### Step 3: Verify Installation

```bash
brew services list | grep mongodb
```

You should see: `mongodb-community started`

---

## Option 2: Use MongoDB Atlas (Cloud - Free)

If you don't want to install MongoDB locally, use the free cloud version:

### Step 1: Create Free Account

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up for free
3. Create a free cluster (M0 - Free tier)

### Step 2: Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)

### Step 3: Update Backend Configuration

Edit `server/.env`:

```env
PORT=5001
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/college_management
NODE_ENV=development
```

Replace:

- `YOUR_USERNAME` with your MongoDB Atlas username
- `YOUR_PASSWORD` with your password
- `YOUR_CLUSTER` with your cluster name

---

## Option 3: Use Docker (If you have Docker installed)

```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

---

## After Installing MongoDB

### 1. Seed the Database

```bash
cd server
npm run seed
```

### 2. Start Backend

```bash
npm run dev
```

### 3. Start Frontend (new terminal)

```bash
cd ..
npm run dev
```

---

## Quick Test

After starting MongoDB, test the connection:

```bash
# If using local MongoDB
mongosh

# You should see MongoDB shell
# Type 'exit' to quit
```

---

## Troubleshooting

### "Command not found: mongosh"

MongoDB is not installed. Follow Option 1 or 2 above.

### "Connection refused"

MongoDB is not running. Start it:

```bash
brew services start mongodb-community
```

### "Authentication failed"

Check your username/password in the connection string.

---

## Recommended: Option 1 (Local Install)

For development, local MongoDB is fastest and easiest:

```bash
# Install
brew tap mongodb/brew
brew install mongodb-community

# Start
brew services start mongodb-community

# Verify
brew services list | grep mongodb
```

Then continue with seeding and starting servers!
