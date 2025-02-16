// 채팅방 정보 관련 api
import axios from "axios";

// 채팅방 조회 api
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

// 채팅방 이름 변경 api
export const updateChatRoomName = async (roomId, newName) => {
  try {
    const response = await axios.put(
      `https://moamoa.store/user-groups/${roomId}`,
      {
        title: newName,
      }
    );
    console.log("Chat room name updated:", response.data);
  } catch (error) {
    console.error("Error updating chat room name:", error);
  }
};

// 채팅방 생성 api
export const makeChatRoom = async (title, userIds) => {
  try {
    const response = await axios.post(
      `https://moamoa.store/user-groups/create`,
      {
        title: title,
        userIds: userIds,
      }
    );
    console.log("Make Chat room:", response.data);
    return response.data.result;
  } catch (error) {
    console.error("Error making chat room:", error);
  }
};

// 채팅방 나가기 api
export const deleteChatRoom = async (userGroupId, userId) => {
  try {
    const response = await axios.delete(
      `https://moamoa.store/user-groups/${userGroupId}/users/${userId}`
    );
    console.log("Delete Chat room ...");
  } catch (error) {
    console.error("Error deleting chat room :", error);
  }
};

// 친구 초대 api
export const inviteFriend = async (userGroupId, userIds) => {
  try {
    const response = await axios.post(
      `https://moamoa.store/user-groups/${userGroupId}/invite`,
      {
        userIds: userIds,
      }
    );
    console.log("Invite Friends:", response.data);
    return response.data.result;
  } catch (error) {
    if (error.response) {
      console.error("Error inviting friends:", error.response.status);
      console.error("서버 응답:", error.response.data);
    } else {
      console.error("Error inviting friends:", error.message);
    }
  }
};

// 지난 챌린지 조회(채팅방) api
export const getRoomPastChallenge = async (roomId, setPastChallengeData) => {
  try {
    const response = await axios.get(
      `https://moamoa.store/user-groups/${roomId}/challenges/history`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    setPastChallengeData(response.data.result);
  } catch (error) {
    console.error("Error fetching room past challenge data:", error);
  }
};
