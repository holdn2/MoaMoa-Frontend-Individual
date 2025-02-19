import React, { useEffect, useState } from "react";
import styles from "./Alarm.module.css";
import Header from "../../components/Header/Header";
import coin3 from "../../assets/Content/coin3.svg";
import getBlack from "../../assets/Tab/getBlack.svg";
import invite from "../../assets/Action/invite.svg";
import acceptButton from "../../assets/AcceptButton/acceptButton.svg";
import refuseButton from "../../assets/AcceptButton/refuseButton.svg";
import { getNotifications } from "../../apis/alarm";
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
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    getNotifications(setNotification);
  }, []);
  const renderAlarm = (type, content) => {
    switch (type) {
      case "coin":
        return (
          <div className={styles.EachAlarmContainer}>
            <img src={coin3} alt="코인 알람" />
            <span className={styles.ContentText}>{content}</span>
          </div>
        );
      case "CHALLENGE_INVITATION":
        return (
          <div className={styles.EachAlarmContainer}>
            <img src={getBlack} alt="챌린지 알람" />
            <span className={styles.ContentText}>{content}</span>
            <button onClick={() => console.log("수락")}>
              <img src={acceptButton} alt="수락 버튼" />
            </button>
            <button onClick={() => console.log("거절")}>
              <img src={refuseButton} alt="거절 버튼" />
            </button>
          </div>
        );
      case "friends":
        return (
          <div className={styles.EachAlarmContainer}>
            <img src={invite} alt="친구 초대 알람" />
            <span className={styles.ContentText}>{content}</span>
            <button onClick={() => console.log("수락")}>
              <img src={acceptButton} alt="수락 버튼" />
            </button>
            <button onClick={() => console.log("거절")}>
              <img src={refuseButton} alt="거절 버튼" />
            </button>
          </div>
        );
    }
  };
  return (
    <div className={styles.AlarmPageContainer}>
      <Header pageName={pageName} />
      <div className={styles.MainArea}>
        {notification.map((alarm) => (
          <div key={item.date}>
            <span className={styles.Date}>{alarm.date}</span>
            {item.alarms.map((value, index) => (
              <div key={index} className={styles.AlarmContainer}>
                {renderAlarm(value.type, value.content)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alarm;
