import axios from "axios";

export const postUserDelete = async () => {
  try {
    const response = await axios.post(
      "https://moamoa.store/user/delete",
      {},
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching postUserDelete", error);
  }
};

export const getUserInvite = async (setUserInviteLink) => {
  try {
    const response = await axios.get("https://moamoa.store/user/invite", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
      },
    });
    setUserInviteLink(response.data.result.url);
    console.log(response.data.result.url);
  } catch (error) {
    console.error("Error fetching postUserDelete", error);
  }
};
