# Role-Based Access Control (RBAC)

## Overview

The College Management System now has proper role-based access control with different permissions for Admin, Teacher, and Student roles.

---

## 🔐 Role Permissions

### Admin (Full Access)

**Can Access:**

- ✅ Dashboard
- ✅ Students (View, Add, Edit, Delete)
- ✅ Teachers (View, Add, Edit, Delete)
- ✅ Attendance (View, Add, Edit, Delete)
- ✅ Marks (View, Add, Edit, Delete)
- ✅ Timetable (View, Add, Edit, Delete)
- ✅ Settings

**Sidebar Menu:**

- Dashboard
- Students
- Teachers
- Attendance
- Marks
- Timetable
- Settings

---

### Teacher (Limited Access)

**Can Access:**

- ✅ Dashboard
- ✅ Students (View Only)
- ✅ Attendance (View, Add, Edit, Delete)
- ✅ Marks (View, Add, Edit, Delete)
- ✅ Timetable (View Only)
- ✅ Settings
- ❌ Teachers (No Access)

**Sidebar Menu:**

- Dashboard
- Students
- Attendance
- Marks
- Timetable
- Settings

**Restrictions:**

- Cannot add/edit/delete students
- Cannot access Teachers page
- Cannot edit timetable

---

### Student (View Only)

**Can Access:**

- ✅ Dashboard
- ✅ My Attendance (View Only)
- ✅ My Marks (View Only)
- ✅ Timetable (View Only)
- ✅ Settings
- ❌ Students (No Access)
- ❌ Teachers (No Access)

**Sidebar Menu:**

- Dashboard
- My Attendance
- My Marks
- Timetable
- Settings

**Restrictions:**

- Cannot add/edit/delete anything
- Can only view their own data
- No access to student or teacher management

---

## 🎯 Features Implemented

### 1. Role-Based Sidebar

- Sidebar menu items change based on user role
- Shows role name in sidebar (Admin Portal, Teacher Portal, Student Portal)

### 2. Conditional Buttons

- Add/Edit/Delete buttons only show for authorized roles
- Students see no action buttons
- Teachers see limited action buttons

### 3. Route Protection

- Routes are protected based on allowed roles
- Unauthorized access shows "Access Denied" message
- Automatic redirect if not authenticated

### 4. UI Adaptations

- Page titles change based on role (e.g., "Marks" vs "My Marks")
- Forms only appear for authorized users
- Action columns in tables hidden for view-only users

---

## 🔄 How It Works

### Authentication Flow

1. User logs in through User Login or Admin Login
2. Backend verifies credentials and returns user with role
3. Frontend stores user data in localStorage
4. Role is checked on every page and component

### Authorization Check

```javascript
const { user } = useAuth();
const canEdit = user?.role === "admin" || user?.role === "teacher";
```

### Route Protection

```javascript
<RoleBasedRoute allowedRoles={["admin", "teacher"]}>
  <Students />
</RoleBasedRoute>
```

---

## 📝 Testing Different Roles

### Test as Admin

1. Go to http://localhost:5173
2. Click "Admin Login"
3. Login: `admin` / `admin123`
4. **You should see:** All menu items, all buttons, full access

### Test as Teacher

1. Go to http://localhost:5173
2. Click "User Login"
3. Login: `teacher` / `teacher123`
4. **You should see:** Limited menu, can edit attendance/marks, cannot edit students

### Test as Student

1. Go to http://localhost:5173
2. Click "User Login"
3. Login: `student` / `student123`
4. **You should see:** Minimal menu, view-only access, no action buttons

---

## 🛡️ Security Features

✅ Frontend route protection
✅ Conditional UI rendering
✅ Role-based menu items
✅ Action button visibility control
✅ Access denied messages
✅ Automatic redirects

---

## 🚀 Next Steps to Apply Changes

1. **Restart Frontend Server:**

   ```bash
   # Press Ctrl+C in frontend terminal
   npm run dev
   ```

2. **Clear Browser Cache:**
   - Press `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

3. **Test All Roles:**
   - Login as admin, teacher, and student
   - Verify permissions are working correctly

---

## 📊 Permission Matrix

| Feature             | Admin | Teacher | Student  |
| ------------------- | ----- | ------- | -------- |
| View Dashboard      | ✅    | ✅      | ✅       |
| View Students       | ✅    | ✅      | ❌       |
| Add/Edit Students   | ✅    | ❌      | ❌       |
| View Teachers       | ✅    | ❌      | ❌       |
| Add/Edit Teachers   | ✅    | ❌      | ❌       |
| View Attendance     | ✅    | ✅      | ✅ (Own) |
| Add/Edit Attendance | ✅    | ✅      | ❌       |
| View Marks          | ✅    | ✅      | ✅ (Own) |
| Add/Edit Marks      | ✅    | ✅      | ❌       |
| View Timetable      | ✅    | ✅      | ✅       |
| Edit Timetable      | ✅    | ❌      | ❌       |

---

## ✨ Summary

Your College Management System now has proper role-based access control! Each user type (Admin, Teacher, Student) has appropriate permissions and sees only what they're allowed to access.

**Restart the frontend to see the changes!**
