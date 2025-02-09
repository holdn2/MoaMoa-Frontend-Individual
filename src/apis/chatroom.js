// 채팅방들 정보 불러오는 api
import axios from "axios";

// userId
export const fetchChatRoomData = async (userId, setChatData) => {
  try {
    const response = await axios.get(
      `https://moamoa.store/user-groups/users/${userId}`
    );
    setChatData(response.data.result);
  } catch (error) {
    console.error("Error fetching chatting room data:", error);
  }
};
