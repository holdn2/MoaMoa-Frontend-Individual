import React, { useState } from "react";
import styles from "./Alarm.module.css";
import Header from "../../components/Header/Header";
import BottomBar from "../../components/BottomBar/BottomBar";

const dummyData = [
  {
    date: "2024.11.22",
    alarms: [
      {
        type: "coin",
        content: "200코인을 얻어 동돼지로 레벨업 되었어요!",
      },
      {
        type: "challenge",
        content: "새로운 챌린지에 초대되었어요!",
      },
      {
        type: "friends",
        content: "찬영님에게 친구요청이 왔어요!",
      },
      {
        type: "friends",
        content: "찬영님에게 친구요청이 왔어요!",
      },
      {
        type: "coin",
        content: "200코인을 얻어 동돼지로 레벨업 되었어요!",
      },
      {
        type: "challenge",
        content: "새로운 챌린지에 초대되었어요!",
      },
    ],
  },
  {
    date: "2024.11.26",
    alarms: [
      {
        type: "coin",
        content: "200코인을 얻어 동돼지로 레벨업 되었어요!",
      },
      {
        type: "challenge",
        content: "새로운 챌린지에 초대되었어요!",
      },
      {
        type: "friends",
        content: "찬영님에게 친구요청이 왔어요!",
      },
      {
        type: "friends",
        content: "찬영님에게 친구요청이 왔어요!",
      },
      {
        type: "coin",
        content: "200코인을 얻어 동돼지로 레벨업 되었어요!",
      },
      {
        type: "challenge",
        content: "새로운 챌린지에 초대되었어요!",
      },
    ],
  },
];

const Alarm = () => {
  const pageName = "알림 페이지";
  const renderAlarm = (type, content) => {
    switch (type) {
      case "coin":
        return (
          <div className={styles.EachAlarmContainer}>
            <img src="../src/assets/Content/coin3.svg" alt="코인 알람" />
            <span className={styles.ContentText}>{content}</span>
          </div>
        );
      case "challenge":
        return (
          <div className={styles.EachAlarmContainer}>
            <img src="../src/assets/Tab/getBlack.svg" alt="챌린지 알람" />
            <span className={styles.ContentText}>{content}</span>
            <button onClick={() => console.log("수락")}>
              <img
                src="../src/assets/AcceptButton/acceptButton.svg"
                alt="수락 버튼"
              />
            </button>
            <button onClick={() => console.log("거절")}>
              <img
                src="../src/assets/AcceptButton/refuseButton.svg"
                alt="거절 버튼"
              />
            </button>
          </div>
        );
      case "friends":
        return (
          <div className={styles.EachAlarmContainer}>
            <img src="../src/assets/Action/invite.svg" alt="친구 초대 알람" />
            <span className={styles.ContentText}>{content}</span>
            <button onClick={() => console.log("수락")}>
              <img
                src="../src/assets/AcceptButton/acceptButton.svg"
                alt="수락 버튼"
              />
            </button>
            <button onClick={() => console.log("거절")}>
              <img
                src="../src/assets/AcceptButton/refuseButton.svg"
                alt="거절 버튼"
              />
            </button>
          </div>
        );
    }
  };
  return (
    <div className={styles.AlarmPageContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        {dummyData.map((item) => (
          <div key={item.date}>
            <span className={styles.Date}>{item.date}</span>
            {item.alarms.map((value, index) => (
              <div key={index} className={styles.AlarmContainer}>
                {renderAlarm(value.type, value.content)}
              </div>
            ))}
          </div>
        ))}
      </div>
      <BottomBar pageName={pageName} />
    </div>
  );
};

export default Alarm;
