import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./AddChallenge.module.css";
import ChallengeCategory from "../../components/ChallengeCategory/ChallengeCategory";
import SelectPeriod from "../../components/SelectPeriod/SelectPeriod";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useForm } from "react-hook-form";

const AddChallenge = () => {
  const pageName = "챌린지 만들기";
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({ defaultValues: { people: 1 } });
  const [challengeClicked, setChallengeClicked] = useState(0);

  const people = watch("people", 1);
  const disabled =
    !watch("title") || !watch("content") || !watch("coin") || isSubmitting;
  return (
    <form
      className={styles.AddChallengePage}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
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
            >
              +
            </button>
            명
            <input type="hidden" {...register("people")} />
          </div>
          <label className={styles.peopleInfinity}>
            <input type="checkbox" {...register("unlimitedPeople")} />
            제한 없음
          </label>
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
