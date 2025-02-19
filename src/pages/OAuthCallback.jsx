import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 토큰 정보 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code"); // 네이버/구글에서 전달된 code
    const state = urlParams.get("state"); // 네이버 전용
    const error = urlParams.get("error");

    if (error) {
      console.error("OAuth 에러:", error);
      navigate("/login");
      return;
    }

    // 2️⃣ 백엔드에 code를 전달해서 토큰 요청
    const fetchToken = async () => {
      try {
        const response = await axios.get(
          `https://moamoa.store/oauth2/callback?code=${code}&state=${state}`,
          { withCredentials: true } // 쿠키 포함 (필요시)
        );

        console.log("🔑 응답 데이터:", response.data); // 응답 로그

        const { accessToken } = response.data;

        if (accessToken) {
          localStorage.setItem("jwt", accessToken);
          console.log("✅ 로그인 성공, 토큰 저장됨");
          navigate("/");
        } else {
          console.error("⚠️ 액세스 토큰 없음");
          navigate("/login");
        }
      } catch (err) {
        if (err.response) {
          console.error("❌ 에러 응답:", err.response.data);
        } else if (err.request) {
          console.error("❌ 요청 실패:", err.request);
        } else {
          console.error("❌ 설정 에러:", err.message);
        }
        navigate("/login");
      }
    };

    if (code) fetchToken();
  }, [navigate]);

  return <div>로그인 중... 🚀</div>;
};

export default OAuthCallback;
