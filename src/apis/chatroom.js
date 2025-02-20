// 채팅방 정보 관련 api
import axios from "axios";

// 채팅방 조회 api
export const fetchChatRoomData = async (setChatData) => {
  try {
    const response = await axios.get("https://moamoa.store/user-groups", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
      },
    });
    setChatData(response.data.result);
  } catch (error) {
    console.error("Error fetching chatting room data:", error);
  }
};

// 채팅방 이름 변경 api
export const updateChatRoomName = async (roomId, newName) => {
  try {
    const response = await axios.put(
      `https://moamoa.store/user-groups/${roomId}/rename`,
      {
        title: newName,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
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
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    console.log("Make Chat room:", response.data);
    return response.data.result;
  } catch (error) {
    console.error("Error making chat room:", error);
  }
};

// 채팅방 나가기 api
export const deleteChatRoom = async (userGroupId) => {
  try {
    const response = await axios.post(
      `https://moamoa.store/user-groups/${userGroupId}/leave`,
      {},
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
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
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
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

// 채팅방 챌린지 조회 api
export const getRoomCurrentChallenge = async (
  roomId,
  setCurrentChallengeData
) => {
  try {
    const response = await axios.get(
      `https://moamoa.store/user-groups/${roomId}/challenges/ongoing`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    setCurrentChallengeData(response.data.result[0]);
  } catch (error) {
    console.error("Error fetching room current challenge data:", error);
  }
};

// 해당 채팅방 인원 조회 api
export const getRoomPeopleCnt = async (roomId, setPeopleCnt) => {
  try {
    const response = await axios.get(
      `https://moamoa.store/user-groups/${roomId}/people`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    setPeopleCnt(response.data.result);
  } catch (error) {
    console.error("Error fetching room current challenge data:", error);
  }
};
