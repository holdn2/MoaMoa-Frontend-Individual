import React from "react";
import styles from "./Diagnosis.module.css";
import Header from "../../components/Header/Header";

const Diagnosis = () => {
  const pageName = "과소비 진단하기";
  return (
    <div className={styles.DiagnosisPageContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}></div>
    </div>
  );
};

export default Diagnosis;
