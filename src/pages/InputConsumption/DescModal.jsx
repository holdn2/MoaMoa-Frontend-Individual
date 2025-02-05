import React from "react";
import styles from "./DescModal.module.css";
import close from "../../assets/Navigation/closeBig.svg";

const DescModal = ({ modalOpen, setModalOpen }) => {
  const categoryDescList = [
    {
      title: "고정비",
      subDesc: "매달 고정적으로 지출하는 비용 (자동 이체)",
      example: "ex) 월세, 관리비, 보험료 등",
    },
    {
      title: "생활비",
      subDesc: "생존하기 위해 지출하는 비용",
      example: "ex) 식비, 병원비, 주유비 등",
    },
    {
      title: "활동비",
      subDesc: "타인과 어울리거나 풍요로운 생활을 위해 \n지출하는 비용\n",
      example: "ex) 여행, 취미, 모임비, 데이트비 등",
    },
    {
      title: "꾸밈비",
      subDesc: "외적인 꾸밈을 위해 지출하는 비용",
      example: "ex) 의류, 헤어, 잡화 등",
    },
    {
      title: "기여비",
      subDesc: "타인을 위해 지출하는 비용",
      example: "ex) 부모님 용돈, 경조사비 등",
    },
    {
      title: "기타",
      subDesc: "위의 항목 외에 예상치 못하게 지출하는 비용",
      example: "",
    },
  ];
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.contentWrapper}>
        <div className={styles.descWrapper}>
          {categoryDescList.map((category) => (
            <ul key={category.title} className={styles.desc}>
              <li className={styles.title}>{category.title}</li>
              <ul>
                <li className={styles.subDesc}>{category.subDesc}</li>
                <li className={styles.example}>{category.example}</li>
              </ul>
            </ul>
          ))}
        </div>
      </div>
      <div className={styles.closeModal} onClick={() => setModalOpen(false)}>
        <img src={close} alt="카테고리 설명창을 닫는 아이콘" />
      </div>
    </div>
  );
};

export default DescModal;
