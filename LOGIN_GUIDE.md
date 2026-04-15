# Login System Guide

## Overview

The College Management System now has **separate login portals** for Users (Students/Teachers) and Admins.

## How to Access

### 1. Landing Page

When you open the application (`http://localhost:5173`), you'll see a landing page with two options:

#### Option 1: User Login (Blue Card)

- For Students and Teachers
- Click to go to `/login`

#### Option 2: Admin Login (Red Card)

- For System Administrators only
- Click to go to `/admin/login`

## Login Credentials

### User Login (`/login`)

**Teacher Account:**

- Username: `teacher`
- Password: `teacher123`

**Student Account:**

- Username: `student`
- Password: `student123`

### Admin Login (`/admin/login`)

**Admin Account:**

- Username: `admin`
- Password: `admin123`

## Features

### User Login Page

- Blue gradient background
- Standard user authentication
- Access to student/teacher dashboards
- Link to switch to Admin Login

### Admin Login Page

- Red/Orange gradient background
- Lock icon indicating restricted access
- Admin role verification
- Only allows admin accounts to login
- Link to switch to User Login

### Security

- Admin login verifies the user role
- Non-admin users cannot access admin features through admin login
- Protected routes redirect to landing page if not authenticated
- Logout returns to landing page

## Navigation Flow

```
Landing Page (/)
    ├── User Login (/login)
    │   └── Dashboard (for students/teachers)
    │
    └── Admin Login (/admin/login)
        └── Admin Dashboard (full access)
```

## Input Fix

The keyboard input issue has been fixed by:

1. Using native HTML input elements instead of custom components
2. Adding proper `name` attributes
3. Adding `autoComplete` attributes
4. Proper event handling with `e.target.name` and `e.target.value`

## Testing

1. Start the application
2. You should see the landing page with two cards
3. Click on "User Login" - you can type in the inputs
4. Try logging in with teacher/student credentials
5. Go back and try "Admin Login"
6. Try logging in with admin credentials

All inputs should now accept keyboard input properly!
