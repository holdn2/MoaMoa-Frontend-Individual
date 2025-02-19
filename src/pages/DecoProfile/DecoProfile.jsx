// 프로필 꾸미기 페이지. 테두리 적용 관련 내용은 구현 안함.
import React, { useEffect, useState } from "react";
import styles from "./DecoProfile.module.css";
import Header from "../../components/Header/Header";
import PrimaryButton from "../../components/Button/PrimaryButton";
import PurchaseModal from "./PurchaseModal";
import purchased from "../../assets/Decoration/purchased.svg";
import coinWhite from "../../assets/Content/coinWhite.svg";
import coin3 from "../../assets/Content/coin3.svg";
import { changeDecoItem, getDecoItemInfo } from "../../apis/decoProfile";

const DecoProfile = () => {
  const pageName = "프로필 꾸미기";
  // 구매 모달창 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 서버에서 가져온 아이템들 중 구매하지 않은 아이템 배열
  const [profileItems, setProfileItems] = useState([]);
  // 서버에서 가져온 아이템들 중 구매한 아이템 배열
  const [boughtItems, setBoughtItem] = useState([]);
  // 사용중인 테두리 ID
  const [selectedOutlineId, setSelectedOutlineId] = useState(0);

  // 아이템 구매 시 즉시 반영되도록 설정.
  const fetchDecoItems = () => {
    getDecoItemInfo(setProfileItems, setBoughtItem, setSelectedOutlineId);
  };
  useEffect(() => {
    fetchDecoItems();
  }, []);

  // 구매하기 위해 선택한 테두리. 0일 때는 아무것도 클릭 x 인 상황. pricetag 색깔 변경을 위한 것.
  const [wantToPurchaseId, setWantToPurchaseId] = useState(0);
  const handleClickPurchase = (id) => {
    if (wantToPurchaseId === 0 || wantToPurchaseId !== id) {
      setWantToPurchaseId(id);
    } else {
      setWantToPurchaseId(0);
    }
  };
  // 구매하려는 아이템 정보
  const [wantToPurchaseItem, setWantToPurchaseItem] = useState({});
  useEffect(() => {
    const buyItem = profileItems.filter(
      (item) => item.itemId === wantToPurchaseId
    );
    setWantToPurchaseItem(buyItem[0]);
  }, [wantToPurchaseId]);

  // 테두리 적용 로직 수정
  const handleOutlineUse = async (useOutline) => {
    if (selectedOutlineId !== useOutline.itemId) {
      await changeDecoItem(useOutline.itemId); // 서버에 적용 요청
      setSelectedOutlineId(useOutline.itemId); // 상태 업데이트
    }
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
              {boughtItems.map((item) => (
                <button
                  key={item.itemId}
                  className={styles.EachOutlineContainer}
                  onClick={() => handleOutlineUse(item)}
                >
                  <img
                    style={{ width: "124px", height: "124px" }}
                    src={item.imageUrl}
                    alt={item.type}
                  />
                  {/* ✅ 선택된 경우 체크 아이콘 표시 */}
                  {selectedOutlineId === item.itemId && (
                    <img
                      style={{ width: "21px", height: "21px" }}
                      className={styles.CheckIcon}
                      src={purchased} // 체크 아이콘 이미지
                      alt="사용 중인 테두리 체크"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.OutlineSectionContainer}>
            {profileItems.length > 0 ? (
              <>
                <span className={styles.OutlineSectionText}>
                  테두리 구매하기
                </span>
                <div className={styles.OutlinesPurchaseContainer}>
                  {profileItems.map((item) => (
                    <button
                      key={item.itemId}
                      className={styles.EachOutlinesPurchaseContainer}
                      onClick={() => handleClickPurchase(item.itemId)}
                    >
                      <img
                        style={{ width: "124px", height: "124px" }}
                        src={item.imageUrl}
                        alt={item.type}
                        className={styles.EachOutline}
                      />
                      {item.itemId === wantToPurchaseId ? (
                        <div className={styles.SelectedPriceContainer}>
                          <span
                            className={styles.PriceText}
                            style={{ color: "#fff" }}
                          >
                            {item.price}
                          </span>
                          <img
                            src={coinWhite}
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
                            src={coin3}
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
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div
        className={styles.PurchaseButton}
        onClick={() => {
          if (wantToPurchaseId !== 0) {
            setIsModalOpen(true);
          }
        }}
      >
        <PrimaryButton disabled={wantToPurchaseId === 0}>
          구매하기
        </PrimaryButton>
      </div>
      {/* 모달창을 띄워서 구매 확인 */}
      {wantToPurchaseItem ? (
        <PurchaseModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          itemId={wantToPurchaseItem.itemId}
          itemImage={wantToPurchaseItem.imageUrl}
          itemPrice={wantToPurchaseItem.price}
          fetchDecoItems={fetchDecoItems}
          handleOutlineUse={handleOutlineUse}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DecoProfile;
