// 나의 소비 시작하기 페이지 구현 예정
import React from "react";
import Header from "../../components/Header/Header";
import PrimaryButton from "../../components/Button/PrimaryButton";

const StartConsumption = () => {
  const pageName = "나의 소비 시작하기";
  return (
    <div>
      <Header pageName={pageName} />
      <div>
        <p>나의 소비 시작</p>
        <p>일주일동안 사용하실 금액을 입력해주세요 !</p>
        <p>
          {/*span 부분 데이터 받아오기 */}
          지난주에는 <span>10만원</span>을 사용했어요 !
        </p>
      </div>
      <div>
        <p>나의 소비 기간</p>
      </div>
      <div>
        <p>목표 금액</p>
      </div>
      <PrimaryButton type="button" size="xl" disabled="true">
        완료
      </PrimaryButton>
    </div>
  );
};

export default StartConsumption;
