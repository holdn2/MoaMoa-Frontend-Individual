import React from "react";
import styles from "./DescModal.module.css";
import close from "../../assets/Navigation/closeBig.svg";

const DescModal = ({ modalOpen, setModalOpen }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.contentWrapper}>
        <div className={styles.descWrapper}>
          <ul className={styles.desc}>
            <li className={styles.title}>고정비</li>
            <ul className={styles.subDesc}>
              <li className={styles.subTitle}>
                매달 고정적으로 지출하는 비용 (자동 이체)
              </li>
              <li className={styles.example}>ex) 월세, 관리비, 보험료 등</li>
            </ul>
          </ul>
          <ul className={styles.desc}>
            <li className={styles.title}>생활비</li>
            <ul className={styles.subDesc}>
              <li className={styles.subTitle}>생존하기 위해 지출하는 비용</li>
              <li className={styles.example}>ex) 식비, 병원비, 주유비 등</li>
            </ul>
          </ul>
          <ul className={styles.desc}>
            <li className={styles.title}>활동비</li>
            <ul className={styles.subDesc}>
              <li className={styles.subTitle}>
                타인과 어울리거나 풍요로운 생활을 위해
                <br /> 지출하는 비용
              </li>
              <li className={styles.example}>
                ex) 여행, 취미, 모임비, 데이트비 등
              </li>
            </ul>
          </ul>
          <ul className={styles.desc}>
            <li className={styles.title}>생활비</li>
            <ul className={styles.subDesc}>
              <li className={styles.subTitle}>
                외적인 꾸밈을 위해 지출하는 비용
              </li>
              <li className={styles.example}>ex) 의류, 헤어, 잡화 등</li>
            </ul>
          </ul>
          <ul className={styles.desc}>
            <li className={styles.title}>기여비</li>
            <ul className={styles.subDesc}>
              <li className={styles.subTitle}>타인을 위해 지출하는 비용</li>
              <li className={styles.example}>ex) 부모님 용돈, 경조사비 등</li>
            </ul>
          </ul>
          <ul className={styles.desc}>
            <li className={styles.title}>기타</li>
            <ul className={styles.subDesc}>
              <li className={styles.subTitle}>
                위의 항목 외에 예상치 못하게 지출하는 비용
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className={styles.closeModal} onClick={() => setModalOpen(false)}>
        <img src={close} alt="카테고리 설명창을 닫는 아이콘" />
      </div>
    </div>
  );
};

export default DescModal;
