import React, { useEffect, useState } from "react";
import styles from "./AddRoomChallenge.module.css";
import { useForm } from "react-hook-form";
import Header from "../../../../components/Header/Header";
import SelectPeriod from "../../../../components/SelectPeriod/SelectPeriod";
import ChallengeCategory from "../../../../components/ChallengeCategory/ChallengeCategory";
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUserInfo } from "../../../../apis/mypage";
import { addNewGroupChallenge } from "../../../../apis/challenge/addChallenge";

const AddRoomChallenge = () => {
  const pageName = "챌린지 만들기";
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  // 채팅방 인원 수
  const peopleCnt = location.state?.peopleCnt;
  // 보유코인 정보를 위한 유저정보 api가져오기
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);
  // 보유코인이 배틀코인보다 많은지
  const [availableCoin, setAvailableCoin] = useState(false);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
      people: peopleCnt,
      startDate: "",
      endDate: "",
      duration: "",
      targetMoney: "",
      coin: "",
      visibility: "friend",
      publicChallenge: false,
      category: "",
    },
  });

  // visibility 값 변경 방지 (친구 공개 고정)
  useEffect(() => {
    setValue("visibility", "friend");
    setValue("publicChallenge", false);
  }, []);

  // 배틀코인이 괜찮은지 검사
  useEffect(() => {
    console.log("유저코인:", userInfo.coin);
    const userCoin = userInfo.coin || 0; // userInfo.coin이 undefined일 경우 대비
    const battleCoin = Number(watch("coin")) || 0;
    if (battleCoin > 0 && battleCoin <= userCoin) {
      setAvailableCoin(true);
    } else {
      setAvailableCoin(false);
    }
  }, [watch("coin"), userInfo.coin]);

  const [challengeClicked, setChallengeClicked] = useState("");
  const [moneyChecked, setMoneyChecked] = useState(false);

  const people = watch("people", 1);
  const disabled =
    !watch("title") ||
    !watch("content") ||
    !watch("coin") ||
    isSubmitting ||
    !availableCoin || // 배틀코인이 보유코인보다 많거나 0일때 비활성화
    !challengeClicked || // 카테고리를 선택하지 않았을 때 비활성화
    (watch("startDate") && new Date(watch("startDate")) <= new Date()); // 시작날짜가 현재와 같거나 이전일때 비활성화

  useEffect(() => {
    console.log("비활성화 상태:", disabled);
  }, [disabled]);
  // 카테고리 클릭 시 적용되게 함.
  useEffect(() => {
    setValue("category", challengeClicked, {
      shouldValidate: false,
      shouldDirty: false,
    });
  }, [challengeClicked]);

  // 시작날과 종료날 상태
  const [startFormatDate, setStartFormatDate] = useState(null);
  const [endFormatDate, setEndFormatDate] = useState(null);
  useEffect(() => {
    setValue("startDate", startFormatDate);
    setValue("endDate", endFormatDate);
  }, [startFormatDate, endFormatDate]);

  useEffect(() => {
    setValue(
      "duration",
      (new Date(endFormatDate) - new Date(startFormatDate)) /
        (1000 * 60 * 60 * 24)
    );
  }, [startFormatDate, endFormatDate]);

  // 챌린지 생성 API 실행
  const onSubmit = async (data) => {
    try {
      console.log("챌린지 생성 요청:", data);
      const result = await addNewGroupChallenge(params.chatroomId, data);
      if (result) {
        navigate("/challengemodal/create", {
          state: {
            name: data.title,
            type: "create",
          },
        });
      } else {
        console.error("챌린지 ID를 가져오지 못했습니다.");
      }
    } catch (error) {
      console.error("챌린지 생성 실패:", error);
    }
  };

  return (
    <form className={styles.AddChallengePage} onSubmit={handleSubmit(onSubmit)}>
      <Header pageName={pageName} />
      <div className={styles.wrapper}>
        <h1>챌린지 모집글을 작성해봐요!</h1>
        <div style={{ marginBottom: "16px" }} className={styles.inputContainer}>
          <p className={styles.inputTitle}>제목</p>
          <textarea
            className={styles.inputTextTitle}
            {...register("title")}
          ></textarea>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>글 내용</p>
          <textarea
            className={styles.inputTextContent}
            {...register("content")}
          ></textarea>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>인원 수</p>
          <div className={styles.peopleBtnWrapper}>
            <button
              type="button"
              className={styles.peopleDownBtn}
              onClick={() =>
                setValue("people", Math.max(Number(people) - 1, 1))
              }
              disabled={true}
            >
              -
            </button>
            <div className={styles.peopleResult}>
              <span>{people}</span>
            </div>
            <button
              type="button"
              className={styles.peopleUpBtn}
              onClick={() => setValue("people", Number(people) + 1)}
              disabled={true}
            >
              +
            </button>
            명
            <input type="hidden" {...register("people")} />
          </div>
          <label className={styles.peopleInfinity} style={{ color: "#919191" }}>
            <input
              type="checkbox"
              {...register("unlimitedPeople")}
              disabled={true}
            />
            제한 없음
          </label>
        </div>
        <SelectPeriod
          setStartFormatDate={setStartFormatDate}
          setEndFormatDate={setEndFormatDate}
          isChallenge={true}
        />
        <span className={styles.warningText} style={{ marginTop: "5px" }}>
          * 현재 시간 이후 부터 설정 가능합니다.
        </span>
        <div className={styles.inputContainer} style={{ marginTop: "20px" }}>
          <p className={styles.inputTitle}>챌린지 목표 금액</p>
          <label className={styles.inputShort}>
            <input
              className={styles.inputTextShort}
              type="number"
              {...register("targetMoney")}
              disabled={moneyChecked}
            />
            원
          </label>
          <label className={styles.peopleInfinity}>
            <input
              type="checkbox"
              {...register("unlimitedTarget")}
              onChange={(e) => setMoneyChecked(e.target.checked)}
            />
            해당 없음
          </label>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>배틀 코인</p>
          <label className={styles.inputShort}>
            <input
              type="number"
              className={styles.inputTextShort}
              {...register("coin")}
            />
            코인
          </label>
          <span className={styles.warningText} style={{ marginTop: "-5px" }}>
            * 0 보다 많고 보유 코인보다 적어야 합니다.
          </span>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>챌린지 공개</p>
          <label className={styles.inputPublic}>
            <input
              type="radio"
              value="public"
              defaultChecked
              {...register("visibility")}
              disabled={true}
            />
            <p style={{ color: "#919191" }}>
              전체 공개
              <span style={{ color: "#919191" }}>
                모아모아 사용자 전체에게 공개됩니다
              </span>
            </p>
          </label>
          <label className={styles.inputPublic}>
            <input
              type="radio"
              value="friend"
              checked
              readOnly
              {...register("visibility")}
            />
            <p>
              친구 공개
              <span>내 친구로 등록된 사용자에게만 공개됩니다</span>
            </p>
          </label>
        </div>
        <ChallengeCategory
          challengeClicked={challengeClicked}
          setChallengeClicked={setChallengeClicked}
        />
        <div className={styles.challengeBtn}>
          <PrimaryButton
            type="submit"
            size="xl"
            disabled={disabled}
            children="챌린지 시작하기"
          />
        </div>
      </div>
    </form>
  );
};

export default AddRoomChallenge;
