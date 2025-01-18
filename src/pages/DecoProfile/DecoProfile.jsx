// 프로필 꾸미기 페이지. 테두리 적용 관련 내용은 구현 안함.
import React, { useState } from "react";
import styles from "./DecoProfile.module.css";
import Header from "../../components/Header/Header";
import PrimaryButton from "../../components/Button/PrimaryButton";
import PurchaseModal from "./PurchaseModal";

const DecoProfile = () => {
  const pageName = "프로필 꾸미기";
  // 상태값 변경 가능하도록
  const [outlines, setOutlines] = useState(outlineType);
  // 보유 중인 테두리
  const userHaveOutline = outlines.filter((item) => item.purchased);
  // 구매하지 않은 테두리
  const canPurchaseOutline = outlines.filter((item) => !item.purchased);
  // 구매하기 위해 선택한 테두리
  const [wantToPurchase, setWantToPurchase] = useState("");
  // 모달창 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 클릭했을 때 클릭한 테두리의 가격이 칠해진 것처럼 보이게 구현
  const handleSelectedOutline = (selectedOutline) => {
    const updatedOutlines = outlines.map((item) => ({
      ...item,
      selected: item.type === selectedOutline.type,
    }));
    setOutlines(updatedOutlines);
    setWantToPurchase(selectedOutline.type);
  };

  // 보유 중인 테두리 중 사용할 것 클릭하는 로직
  const handleOutlineUse = (useOutline) => {
    const updatedOutlines = outlines.map((item) => ({
      ...item,
      use: item.id === useOutline.id,
    }));
    setOutlines(updatedOutlines);
  };

  return (
    <div className={styles.DecoPageContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        <div className={styles.OutlineContainer}>
          <span className={styles.OutlineTitle}>프로필 테두리</span>
          <div className={styles.OutlineSectionContainer}>
            <span className={styles.OutlineSectionText}>보유 중인 테두리</span>
            <div className={styles.OutlinesUserHaveContainer}>
              {userHaveOutline.map((item) => (
                <button
                  key={item.type}
                  className={styles.EachOutlineContainer}
                  onClick={() => handleOutlineUse(item)}
                >
                  <img
                    style={{ width: "124px", height: "124px" }}
                    src={item.outline}
                    alt={item.type}
                  />
                  {item.use ? (
                    <img
                      style={{ width: "21px", height: "21px" }}
                      src="../src/assets/Decoration/purchased.svg"
                      alt="사용 중인 테두리 체크"
                    />
                  ) : (
                    <div style={{ width: "21px", height: "21px" }}></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.OutlineSectionContainer}>
            <span className={styles.OutlineSectionText}>테두리 구매하기</span>
            <div className={styles.OutlinesPurchaseContainer}>
              {canPurchaseOutline.map((item) => (
                <button
                  key={item.type}
                  className={styles.EachOutlinesPurchaseContainer}
                  onClick={() => handleSelectedOutline(item)}
                >
                  <img
                    style={{ width: "124px", height: "124px" }}
                    src={item.outline}
                    alt={item.type}
                    className={styles.EachOutline}
                  />
                  {item.selected ? (
                    <div className={styles.SelectedPriceContainer}>
                      <span
                        className={styles.PriceText}
                        style={{ color: "#fff" }}
                      >
                        {item.price}
                      </span>
                      <img
                        src="../src/assets/Content/coinWhite.svg"
                        alt="선택함"
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                    </div>
                  ) : (
                    <div className={styles.PriceContainer}>
                      <span className={styles.PriceText}>{item.price}</span>
                      <img
                        src="../src/assets/Content/coin3.svg"
                        alt="선택안함"
                        style={{
                          display: "flex",
                          width: "19px",
                          height: "19px",
                          marginTop: "-1px",
                        }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.PurchaseButton}
        onClick={() => {
          if (wantToPurchase) {
            setIsModalOpen(true);
          }
        }}
      >
        <PrimaryButton>구매하기</PrimaryButton>
      </div>
      {/* 모달창을 띄워서 구매 확인 */}
      <PurchaseModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        outlines={outlines}
        wantToPurchase={wantToPurchase}
        setOutlines={setOutlines}
        setWantToPurchase={setWantToPurchase}
      />
    </div>
  );
};

export default DecoProfile;

const outlineType = [
  {
    id: 1,
    type: "default",
    outline: "../src/assets/Decoration/Outlines/defaultOutline.svg",
    price: 0,
    purchased: true,
    selected: false,
    use: true,
  },
  {
    id: 2,
    type: "blue",
    outline: "../src/assets/Decoration/Outlines/blueOutline.svg",
    price: 10,
    priceImg: "../src/assets/Decoration/Cost/tenCoin.svg",
    selectedPriceImg: "../src/assets/Decoration/Cost/selectedThirtyCoin.svg",
    purchased: false,
    selected: false,
    use: false,
  },
  {
    id: 3,
    type: "yellow",
    outline: "../src/assets/Decoration/Outlines/yellowOutline.svg",
    price: 10,
    priceImg: "../src/assets/Decoration/Cost/tenCoin.svg",
    selectedPriceImg: "../src/assets/Decoration/Cost/selectedThirtyCoin.svg",
    purchased: false,
    selected: false,
    use: false,
  },
  {
    id: 4,
    type: "pink",
    outline: "../src/assets/Decoration/Outlines/pinkOutline.svg",
    price: 10,
    priceImg: "../src/assets/Decoration/Cost/tenCoin.svg",
    selectedPriceImg: "../src/assets/Decoration/Cost/selectedThirtyCoin.svg",
    purchased: false,
    selected: false,
    use: false,
  },
  {
    id: 5,
    type: "littleStar",
    outline: "../src/assets/Decoration/Outlines/littleStarOutline.svg",
    price: 20,
    priceImg: "../src/assets/Decoration/Cost/twentyCoin.svg",
    selectedPriceImg: "../src/assets/Decoration/Cost/selectedThirtyCoin.svg",
    purchased: false,
    selected: false,
    use: false,
  },
  {
    id: 6,
    type: "clover",
    outline: "../src/assets/Decoration/Outlines/cloverOutline.svg",
    price: 20,
    priceImg: "../src/assets/Decoration/Cost/twentyCoin.svg",
    selectedPriceImg: "../src/assets/Decoration/Cost/selectedThirtyCoin.svg",
    purchased: false,
    selected: false,
    use: false,
  },
  {
    id: 7,
    type: "heart",
    outline: "../src/assets/Decoration/Outlines/heartOutline.svg",
    price: 20,
    priceImg: "../src/assets/Decoration/Cost/twentyCoin.svg",
    selectedPriceImg: "../src/assets/Decoration/Cost/selectedThirtyCoin.svg",
    purchased: false,
    selected: false,
    use: false,
  },
  {
    id: 8,
    type: "sunglass",
    outline: "../src/assets/Decoration/Outlines/sunglassOutline.svg",
    price: 30,
    priceImg: "../src/assets/Decoration/Cost/thirtyCoin.svg",
    selectedPriceImg: "../src/assets/Decoration/Cost/selectedThirtyCoin.svg",
    purchased: false,
    selected: false,
    use: false,
  },
  {
    id: 9,
    type: "manyStar",
    outline: "../src/assets/Decoration/Outlines/manyStarOutline.svg",
    price: 30,
    priceImg: "../src/assets/Decoration/Cost/thirtyCoin.svg",
    selectedPriceImg: "../src/assets/Decoration/Cost/selectedThirtyCoin.svg",
    purchased: false,
    selected: false,
    use: false,
  },
  {
    id: 10,
    type: "bubble",
    outline: "../src/assets/Decoration/Outlines/bubbleOutline.svg",
    price: 30,
    priceImg: "../src/assets/Decoration/Cost/thirtyCoin.svg",
    selectedPriceImg: "../src/assets/Decoration/Cost/selectedThirtyCoin.svg",
    purchased: false,
    selected: false,
    use: false,
  },
];
