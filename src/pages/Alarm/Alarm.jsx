import React, { useEffect, useState } from "react";
import styles from "./Alarm.module.css";
import Header from "../../components/Header/Header";
import coin3 from "../../assets/Content/coin3.svg";
import getBlack from "../../assets/Tab/getBlack.svg";
import invite from "../../assets/Action/invite.svg";
import acceptButton from "../../assets/AcceptButton/acceptButton.svg";
import refuseButton from "../../assets/AcceptButton/refuseButton.svg";
import { getNotifications } from "../../apis/alarm";
import { acceptFriendRequest } from "../../apis/friend";

const Alarm = () => {
  const pageName = "알림 페이지";
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    getNotifications(setNotification);
    // console.log(notification);
  }, []);

  // 날짜별로 알림을 그룹화하고, 최신 날짜 순으로 정렬하는 함수
  const groupNotificationsByDate = (notifications) => {
    const grouped = {};

    notifications.forEach((item) => {
      const date = new Date(item.createdAt)
        .toISOString()
        .split("T")[0]
        .replace(/-/g, "."); // YYYY.MM.DD 형식 변환

      if (!grouped[date]) {
        grouped[date] = { date, alarms: [] };
      }

      grouped[date].alarms.push({
        id: item.id,
        type: item.type,
        content: item.content,
        createdAt: item.createdAt, // 시간 정렬을 위해 저장
      });
    });

    // 최신 날짜 순으로 정렬
    return Object.values(grouped)
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // 날짜 기준 내림차순 정렬
      .map((group) => ({
        ...group,
        alarms: group.alarms.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ), // 알림 최신순 정렬
      }));
  };

  const groupedNotifications = groupNotificationsByDate(notification);
  const renderAlarm = (type, content, notificationId) => {
    switch (type) {
      case "CHALLENGE_COMPLETION":
        return (
          <div className={styles.EachAlarmContainer}>
            <img src={coin3} alt="챌린지 완료 알람" />
            <span className={styles.ContentText}>{content}</span>
          </div>
        );
      case "USER_GROUP_INVITATION":
        return (
          <div className={styles.EachAlarmContainer}>
            <img src={getBlack} alt="채팅방 초대 알람" />
            <span className={styles.ContentText}>{content}</span>
          </div>
        );
      case "FRIEND_REQUEST":
        return (
          <div className={styles.EachAlarmContainer}>
            <img src={invite} alt="친구 요청 알람" />
            <span className={styles.ContentText}>{content}</span>
            <button
              onClick={() => {
                console.log("친구 요청 수락");
                acceptFriendRequest(notificationId, true);
              }}
            >
              <img src={acceptButton} alt="수락 버튼" />
            </button>
            <button
              onClick={() => {
                console.log("친구 요청 거절");
                acceptFriendRequest(notificationId, false);
              }}
            >
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

        {groupedNotifications.map((group) => (
          <div key={group.date}>
            <span className={styles.Date}>{group.date}</span>
            <div className={styles.AlarmContainer}>
              {group.alarms.map((alarm, index) => (
                <div key={index}>
                  {renderAlarm(alarm.type, alarm.content, alarm.id)}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Alarm;
