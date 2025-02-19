// 친구 관련 api
import axios from "axios";
import axiosInstance from "./axiosInstance";

// 친구 목록 전체 보기 api
export const getAllFriendsInfo = async (setAllFriendsData) => {
  try {
    const response = await axios.get(
      "https://moamoa.store/friendships/my-friend",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    console.log(response.data.result);
    setAllFriendsData(response.data.result);
  } catch (error) {
    console.error("Error fetching all friends data", error);
  }
};

// 친구 추가를 위한 검색 api
export const searchNewFriends = async (friendNickname, setSearchedFriends) => {
  try {
    const response = await axios.get(
      `https://moamoa.store/friendships/search?nickname=${friendNickname}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    setSearchedFriends(response.data.result);
  } catch (error) {
    console.error("Error fetching search none friend data", error);
  }
};

// 친구 추가 요청 api
export const postFriendRequest = async (userId) => {
  try {
    const response = await axios.post(
      `https://moamoa.store/friendships/request/${userId}`,
      {},
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
  } catch (error) {
    console.error("Error request add friend :", error);
  }
};

// 친구 요청 수락 api
export const acceptFriendRequest = async (notificationId, isAccept) => {
  try {
    const response = await axios.post(
      `https://moamoa.store/friendships/request/${notificationId}/action`,
      {
        request: isAccept,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
  } catch (error) {
    console.error("Error request add friend :", error);
  }
};
// export const acceptFriendRequest = async (notificationId, isAccept) => {
//   try {
//     const response = await axiosInstance.post(
//       `/friendships/request/${notificationId}/action`,
//       {
//         accept: isAccept, // 요청 필드명 확인 (기존 `request` → `accept`로 변경 가능)
//       }
//     );

//     console.log("✅ 친구 요청 처리 성공:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("❌ 친구 요청 처리 실패:", error);

//     if (error.response) {
//       console.error("📌 서버 응답:", error.response.data);
//     } else if (error.request) {
//       console.error("📌 요청이 서버에 도달하지 못함.");
//     } else {
//       console.error("📌 요청 설정 중 에러 발생:", error.message);
//     }

//     throw error; // 오류 발생 시 호출한 쪽에서 처리 가능하도록 예외 던지기
//   }
// };
