import React, { useState } from "react";
import styles from "./AddRoomChallenge.module.css";
import { useForm } from "react-hook-form";
import Header from "../../../../components/Header/Header";
import SelectPeriod from "../../../../components/SelectPeriod/SelectPeriod";
import ChallengeCategory from "../../../../components/ChallengeCategory/ChallengeCategory";
import PrimaryButton from "../../../../components/Button/PrimaryButton";

// 채팅방 인원 수 예시 데이터
const peopleCnt = 4;

const AddRoomChallenge = () => {
  const pageName = "챌린지 만들기";
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({ defaultValues: { people: peopleCnt } });
  const [challengeClicked, setChallengeClicked] = useState(0);

  const people = watch("people", peopleCnt);
  const disabled =
    !watch("title") || !watch("content") || !watch("coin") || isSubmitting;
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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
            <div className={styles.peopleDownBtn}>-</div>
            <div className={styles.peopleResult}>
              <span>{people}</span>
            </div>
            <div className={styles.peopleUpBtn}>+</div>
            명
            <input type="hidden" {...register("people")} />
          </div>
          <div className={styles.peopleInfinity}>
            <div className={styles.Checkbox} />
            제한 없음
          </div>
        </div>
        <SelectPeriod />
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>배틀 코인</p>
          <label className={styles.inputCoin}>
            <input className={styles.inputTextCoin} {...register("coin")} />
            코인
          </label>
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>챌린지 공개</p>
          <label
            className={styles.inputPublic}
            style={{ pointerEvents: "none" }}
          >
            <input type="radio" value="public" {...register("visibility")} />
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
              defaultChecked
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
