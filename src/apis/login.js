// 로그인 관련 api
import axiosInstance from "./axiosInstance";

export const loginAPI = async (email, password) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await axiosInstance.post("/login", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // ✅ JWT 토큰 저장
    const token = response.headers["authorization"];
    if (token) {
      localStorage.setItem("jwt", token);
      console.log("✅ JWT Token Saved:", token);
    } else {
      console.warn("⚠️ No JWT token found in response headers.");
    }

    return response.data;
  } catch (error) {
    console.error("❌ Login failed:", error);
    throw error;
  }
};
