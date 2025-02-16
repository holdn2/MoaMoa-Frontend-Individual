import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./AddChallenge.module.css";
import ChallengeCategory from "../../components/ChallengeCategory/ChallengeCategory";
import SelectPeriod from "../../components/SelectPeriod/SelectPeriod";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useForm } from "react-hook-form";
import { addNewChallenge } from "../../apis/challenge/addChallenge";
import { useNavigate } from "react-router-dom";

const AddChallenge = () => {
  const pageName = "챌린지 만들기";
  const navigate = useNavigate();
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
      people: 1,
      startDate: "",
      endDate: "",
      targetMoney: "",
      coin: "",
      visibility: "public",
      publicChallenge: true,
      category: "",
    },
  });
  const [challengeClicked, setChallengeClicked] = useState("");
  const [peopleChecked, setPeopleChecked] = useState(false);
  const [moneyChecked, setMoneyChecked] = useState(false);

  const people = watch("people", 1);
  const disabled =
    !watch("title") || !watch("content") || !watch("coin") || isSubmitting;

  // 카테고리 클릭 시 적용되게 함.
  useEffect(() => {
    setValue("category", challengeClicked, {
      shouldValidate: false,
      shouldDirty: false,
    });
  }, [challengeClicked]);

  // 시작날과 종료날 상태
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  useEffect(() => {
    setValue("startDate", startDate);
    setValue("endDate", endDate);
  }, [startDate, endDate]);

  // visibility 값 변경에 따라 publicChallenge 값을 자동으로 설정
  useEffect(() => {
    setValue("publicChallenge", watch("visibility") === "public");
  }, [watch("visibility")]);

  // 챌린지 아이디 상태
  const [challengeId, setChallengeId] = useState(0);

  // 챌린지 생성 API 실행
  const onSubmit = async (data) => {
    try {
      console.log("챌린지 생성 요청:", data);
      const result = await addNewChallenge(data, setChallengeId);
      if (result) {
        navigate("/challengemodal/challengemodalContent", {
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
              disabled={peopleChecked}
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
              disabled={peopleChecked}
            >
              +
            </button>
            명
            <input type="hidden" {...register("people")} />
          </div>
          <label className={styles.peopleInfinity}>
            <input
              type="checkbox"
              {...register("unlimitedPeople")}
              onChange={(e) => setPeopleChecked(e.target.checked)}
            />
            제한 없음
          </label>
        </div>
        <SelectPeriod setStartDate={setStartDate} setEndDate={setEndDate} />
        <div className={styles.inputContainer}>
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
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>챌린지 공개</p>
          <label className={styles.inputPublic}>
            <input
              type="radio"
              value="public"
              defaultChecked
              {...register("visibility")}
            />
            <p>
              전체 공개
              <span>모아모아 사용자 전체에게 공개됩니다</span>
            </p>
          </label>
          <label className={styles.inputPublic}>
            <input type="radio" value="friend" {...register("visibility")} />
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

export default AddChallenge;
