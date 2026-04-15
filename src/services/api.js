import API_BASE_URL from "../config/api";

// Generic API call function
const apiCall = async (endpoint, method = "GET", data = null) => {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

// Students API
export const studentsAPI = {
  getAll: () => apiCall("/students"),
  getById: (id) => apiCall(`/students/${id}`),
  create: (data) => apiCall("/students", "POST", data),
  update: (id, data) => apiCall(`/students/${id}`, "PUT", data),
  delete: (id) => apiCall(`/students/${id}`, "DELETE"),
};

// Teachers API
export const teachersAPI = {
  getAll: () => apiCall("/teachers"),
  getById: (id) => apiCall(`/teachers/${id}`),
  create: (data) => apiCall("/teachers", "POST", data),
  update: (id, data) => apiCall(`/teachers/${id}`, "PUT", data),
  delete: (id) => apiCall(`/teachers/${id}`, "DELETE"),
};

// Attendance API
export const attendanceAPI = {
  getAll: () => apiCall("/attendance"),
  getById: (id) => apiCall(`/attendance/${id}`),
  create: (data) => apiCall("/attendance", "POST", data),
  update: (id, data) => apiCall(`/attendance/${id}`, "PUT", data),
  delete: (id) => apiCall(`/attendance/${id}`, "DELETE"),
};

// Marks API
export const marksAPI = {
  getAll: () => apiCall("/marks"),
  getById: (id) => apiCall(`/marks/${id}`),
  create: (data) => apiCall("/marks", "POST", data),
  update: (id, data) => apiCall(`/marks/${id}`, "PUT", data),
  delete: (id) => apiCall(`/marks/${id}`, "DELETE"),
};

// Timetable API
export const timetableAPI = {
  getAll: () => apiCall("/timetable"),
  getById: (id) => apiCall(`/timetable/${id}`),
  create: (data) => apiCall("/timetable", "POST", data),
  update: (id, data) => apiCall(`/timetable/${id}`, "PUT", data),
  delete: (id) => apiCall(`/timetable/${id}`, "DELETE"),
};
