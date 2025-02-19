// 친구 관련 api
import axios from "axios";

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
