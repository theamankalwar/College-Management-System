# College Management System - Backend

Node.js + Express + MongoDB backend for the College Management System.

## Setup

1. Install dependencies:

```bash
cd server
npm install
```

2. Create `.env` file:

```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB connection string:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/college_management
NODE_ENV=development
```

4. Start MongoDB (if running locally):

```bash
mongod
```

5. Start the server:

```bash
npm run dev
```

## API Endpoints

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
- `GET /api/attendance/:id` - Get single attendance record
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
- `GET /api/timetable/:id` - Get single timetable entry
- `POST /api/timetable` - Create timetable entry
- `PUT /api/timetable/:id` - Update timetable entry
- `DELETE /api/timetable/:id` - Delete timetable entry

## Example Request Bodies

### Create Student

```json
{
  "name": "John Doe",
  "rollNumber": "CS001",
  "course": "Computer Science",
  "email": "john@example.com",
  "status": "Active"
}
```

### Create Teacher

```json
{
  "name": "Dr. Robert Smith",
  "department": "Computer Science",
  "email": "robert@example.com",
  "phone": "+1234567890"
}
```

### Create Attendance

```json
{
  "studentName": "John Doe",
  "rollNumber": "CS001",
  "course": "Computer Science",
  "percentage": 92,
  "status": "Present"
}
```

### Create Mark

```json
{
  "studentName": "John Doe",
  "subject": "Data Structures",
  "marks": 85,
  "grade": "A"
}
```

### Create Timetable Entry

```json
{
  "day": "Monday",
  "time": "9:00 AM",
  "subject": "Data Structures",
  "teacher": "Dr. Robert Smith"
}
```
