// 회원가입 프로세스 관련 api
import axios from "axios";

// 이메일 인증 api
export const verifyEmail = async (email) => {
  try {
    const response = await axios.post(
      "https://moamoa.store/verify-email/send",
      {
        userMail: email,
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error verify email :", error);
  }
};

// 이메일이 인증이 되었는지 확인 api
export const checkEmailVerify = async (setIsVerified) => {
  try {
    const response = await axios.get(
      "https://moamoa.store/verify-email/result"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching join result:", error);
  }
};

// 비밀번호 설정 api
export const setPasswordAPI = async (email, password) => {
  try {
    const response = await axios.post("https://moamoa.store/join", {
      email: email,
      password: password,
    });
    console.log(response);
  } catch (error) {
    console.error("Error verify email :", error);
  }
};

// 닉네임 설정 api
export const setNicknameAPI = async (email, nickname) => {
  try {
    const response = await axios.post("https://moamoa.store/nickname", {
      email: email,
      nickname: nickname,
    });
    return response.data;
  } catch (error) {
    console.error("Error verify email :", error);
  }
};
