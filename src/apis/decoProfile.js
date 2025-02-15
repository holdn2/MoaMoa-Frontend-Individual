// 프로필 꾸미기 관련 api
import axios from "axios";

// 프로필 테두리 정보 가져오는 api
export const getDecoItemInfo = async (setProfileItems, setBoughtItem) => {
  try {
    const response = await axios.get(
      "https://moamoa.store/user/adorn-profile",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    const items = response.data.result.items;
    const boughtItemIds = response.data.result.boughtItemId;

    // boughtItemIds에 포함된 itemId를 가진 item만 필터링
    const boughtItems = items.filter((item) =>
      boughtItemIds.includes(item.itemId)
    );

    // 구매한 아이템만 필터링
    const notBoughtItems = items.filter(
      (item) => !boughtItemIds.includes(item.itemId)
    );

    setProfileItems(notBoughtItems);
    setBoughtItem(boughtItems);
  } catch (error) {
    console.error("Error fetching deco items data", error);
  }
};

// 테두리 구매 관련 api
export const purchaseDecoItem = async (itemId) => {
  try {
    const response = await axios.post(
      "https://moamoa.store/user/item",
      {
        itemId: itemId,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    console.log("Purchase item :", response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("Error purchasing item :", error);
  }
};
