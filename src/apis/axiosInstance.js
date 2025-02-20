import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://moamoa.store",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ 모든 요청에 JWT 자동 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt"); // 저장된 JWT 토큰 가져오기
    console.log("📌 Axios Interceptor - JWT Token:", token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // ✅ 자동 추가
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
