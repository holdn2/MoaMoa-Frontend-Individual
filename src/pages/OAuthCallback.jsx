import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSocialLogin = async () => {
      try {
        // 쿠키 기반 인증 정보 확인
        const response = await axios.get("https://moamoa.store/api/user", {
          withCredentials: true, // ✅ 쿠키 포함 요청
        });

        if (response.status === 200) {
          console.log("✅ 소셜 로그인 성공", response.data);
          navigate("/"); // 홈으로 이동
        } else {
          console.error("❌ 로그인 실패");
          navigate("/login");
        }
      } catch (err) {
        console.error("❗️ 로그인 확인 실패:", err);
        navigate("/login");
      }
    };

    checkSocialLogin();
  }, [navigate]);

  return <div>로그인 중... 🚀</div>;
};

export default OAuthCallback;
