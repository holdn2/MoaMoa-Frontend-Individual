import React from "react";
import styles from "./Diagnosis.module.css";
import PrimaryButton from "../../components/Button/PrimaryButton";

const SelectButtonContainer = ({ selectedAge, setSelectedAge }) => {
  switch (selectedAge) {
    case 0:
      return (
        <div className={styles.ButtonWrapper}>
          <div onClick={() => setSelectedAge(1)}>
            <PrimaryButton size="lg">10~20대</PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(2)}>
            <PrimaryButton size="lg">30대</PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(3)}>
            <PrimaryButton size="lg">40대</PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(4)}>
            <PrimaryButton size="lg">50대 이상</PrimaryButton>
          </div>
        </div>
      );
    case 1:
      return (
        <div className={styles.ButtonWrapper}>
          <div onClick={() => setSelectedAge(0)}>
            <PrimaryButton size="lg">10~20대</PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(2)}>
            <PrimaryButton size="lg" disabled={true}>
              30대
            </PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(3)}>
            <PrimaryButton size="lg" disabled={true}>
              40대
            </PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(4)}>
            <PrimaryButton size="lg" disabled={true}>
              50대 이상
            </PrimaryButton>
          </div>
        </div>
      );
    case 2:
      return (
        <div className={styles.ButtonWrapper}>
          <div onClick={() => setSelectedAge(1)}>
            <PrimaryButton size="lg" disabled={true}>
              10~20대
            </PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(0)}>
            <PrimaryButton size="lg">30대</PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(3)}>
            <PrimaryButton size="lg" disabled={true}>
              40대
            </PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(4)}>
            <PrimaryButton size="lg" disabled={true}>
              50대 이상
            </PrimaryButton>
          </div>
        </div>
      );
    case 3:
      return (
        <div className={styles.ButtonWrapper}>
          <div onClick={() => setSelectedAge(1)}>
            <PrimaryButton size="lg" disabled={true}>
              10~20대
            </PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(2)}>
            <PrimaryButton size="lg" disabled={true}>
              30대
            </PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(0)}>
            <PrimaryButton size="lg">40대</PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(4)}>
            <PrimaryButton size="lg" disabled={true}>
              50대 이상
            </PrimaryButton>
          </div>
        </div>
      );
    case 4:
      return (
        <div className={styles.ButtonWrapper}>
          <div onClick={() => setSelectedAge(1)}>
            <PrimaryButton size="lg" disabled={true}>
              10~20대
            </PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(2)}>
            <PrimaryButton size="lg" disabled={true}>
              30대
            </PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(3)}>
            <PrimaryButton size="lg" disabled={true}>
              40대
            </PrimaryButton>
          </div>
          <div onClick={() => setSelectedAge(0)}>
            <PrimaryButton size="lg">50대 이상</PrimaryButton>
          </div>
        </div>
      );
  }
};

export default SelectButtonContainer;
