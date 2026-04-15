# College Management System - Full Stack MERN Application

A complete college management system built with MongoDB, Express.js, React, and Node.js (MERN stack).

## Features

### ✨ Core Functionality

- **Authentication System** - Login/Logout with role-based access
- **Student Management** - Full CRUD operations for student records
- **Teacher Management** - Add, edit, delete, and view teacher information
- **Attendance Tracking** - Mark and manage student attendance
- **Marks Management** - Record and track student marks with auto-grade calculation
- **Timetable Management** - Create and manage class schedules
- **Dashboard** - Real-time statistics and quick actions
- **Responsive Design** - Works on desktop, tablet, and mobile devices

### 🔐 User Roles

- **Admin** - Full access to all features
- **Teacher** - Manage attendance, marks, and view students
- **Student** - View personal information and records

## Tech Stack

### Frontend

- React 18
- React Router DOM v6
- Tailwind CSS
- Context API for state management

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- RESTful API architecture

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd college-management-system
```

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your MongoDB connection string
# PORT=5001
# MONGODB_URI=mongodb://localhost:27017/college_management
# NODE_ENV=development
```

### 3. Start MongoDB

```bash
# For macOS with Homebrew
brew services start mongodb-community

# Or run manually
mongod
```

### 4. Seed the Database

```bash
# Still in server directory
npm run seed
```

This will create:

- Sample students, teachers, attendance, marks, and timetable data
- Default user accounts:
  - **Admin**: username: `admin`, password: `admin123`
  - **Teacher**: username: `teacher`, password: `teacher123`
  - **Student**: username: `student`, password: `student123`

### 5. Start the Backend Server

```bash
npm run dev
```

Backend will run on `http://localhost:5001`

### 6. Frontend Setup

Open a new terminal:

```bash
# Navigate to project root
cd ..

# Install dependencies
npm install

# Start the development server
npm run dev
```

Frontend will run on `http://localhost:5173` (or another port shown in terminal)

## Usage

1. Open your browser and go to `http://localhost:5173`
2. Login with one of the default accounts:
   - Admin: `admin` / `admin123`
   - Teacher: `teacher` / `teacher123`
   - Student: `student` / `student123`
3. Explore the features!

## API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/me` - Get current user

### Students

- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get single student
- `POST /api/students` - Create student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student

### Teachers

- `GET /api/teachers` - Get all teachers
- `GET /api/teachers/:id` - Get single teacher
- `POST /api/teachers` - Create teacher
- `PUT /api/teachers/:id` - Update teacher
- `DELETE /api/teachers/:id` - Delete teacher

### Attendance

- `GET /api/attendance` - Get all attendance records
- `GET /api/attendance/:id` - Get single record
- `POST /api/attendance` - Create attendance record
- `PUT /api/attendance/:id` - Update attendance record
- `DELETE /api/attendance/:id` - Delete attendance record

### Marks

- `GET /api/marks` - Get all marks
- `GET /api/marks/:id` - Get single mark record
- `POST /api/marks` - Create mark record
- `PUT /api/marks/:id` - Update mark record
- `DELETE /api/marks/:id` - Delete mark record

### Timetable

- `GET /api/timetable` - Get all timetable entries
- `GET /api/timetable/:id` - Get single entry
- `POST /api/timetable` - Create timetable entry
- `PUT /api/timetable/:id` - Update timetable entry
- `DELETE /api/timetable/:id` - Delete timetable entry

## Project Structure

```
college-management-system/
├── server/                 # Backend
│   ├── config/            # Database configuration
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── server.js          # Express server
│   ├── seedData.js        # Database seeding script
│   └── package.json
├── src/                   # Frontend
│   ├── components/        # Reusable components
│   ├── context/           # React Context (Auth)
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── config/            # Configuration files
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Entry point
├── public/                # Static files
└── package.json           # Frontend dependencies
```

## Features in Detail

### Dashboard

- Real-time statistics (total students, teachers, courses, attendance rate)
- Recent activities feed
- Quick action buttons for common tasks

### Student Management

- Add new students with roll number, course, email
- Edit existing student information
- Delete students
- View all students in a table format
- Active/Inactive status tracking

### Teacher Management

- Add teachers with department and contact info
- Edit teacher details
- Delete teachers
- View all teachers

### Attendance System

- Mark attendance for students
- Track attendance percentage
- Filter by course and date
- Present/Absent status

### Marks Management

- Add marks for students by subject
- Auto-calculate grades based on marks
- Edit and delete mark records
- Filter by subject and semester

### Timetable

- Visual weekly timetable
- Add classes with day, time, subject, and teacher
- Edit and delete timetable entries
- Hover to see edit/delete options

## Troubleshooting

### Port Already in Use

If port 5001 is already in use:

```bash
# Find and kill the process
lsof -ti:5001 | xargs kill -9

# Or change the port in server/.env
PORT=5002
```

### MongoDB Connection Error

- Ensure MongoDB is running
- Check your connection string in `server/.env`
- Verify MongoDB is accessible at the specified URI

### Frontend Can't Connect to Backend

- Ensure backend is running on port 5001
- Check `.env` file in project root has correct API URL
- Restart the frontend dev server after changing `.env`

## Future Enhancements

- [ ] JWT-based authentication
- [ ] Password hashing with bcrypt
- [ ] File upload for student/teacher profiles
- [ ] Email notifications
- [ ] Advanced reporting and analytics
- [ ] Export data to PDF/Excel
- [ ] Multi-language support
- [ ] Dark mode

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please open an issue on GitHub.
