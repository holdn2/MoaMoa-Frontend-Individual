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

    console.log("📌 서버 응답:", response); // 응답 전체 확인

    // ✅ JWT 토큰 확인
    const token = response.headers["authorization"];
    if (token) {
      localStorage.setItem("jwt", token);
      console.log("✅ JWT Token Saved:", token);
      return { success: true, token }; // ✅ 로그인 성공 응답
    } else {
      console.warn("⚠️ No JWT token found in response headers.");
      return { success: false }; // ❌ 로그인 실패 응답
    }
  } catch (error) {
    console.error("❌ Login failed:", error);
    return { success: false, error };
  }
};
