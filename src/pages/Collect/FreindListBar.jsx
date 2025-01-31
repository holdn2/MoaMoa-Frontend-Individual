import React from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 9px 0;
`;
const FriendInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  > img {
    width: 49px;
    height: 49px;
    border-radius: 50%;
  }
  > span {
    color: var(--Grey-800, #2b2b2b);
    text-align: center;
    /* sb/18px */
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
const WithFriendMark = styled.div`
  display: flex;
  height: 20px;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: var(--Primary-500main, #00befc);
  color: var(--White, #fff);
  text-align: center;
  /* md/14px */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const NotFriendMark = styled.button`
  display: flex;
  padding: 6px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--Grey-100, #dedede);
  color: var(--Grey-600, #5e5e5e);
  text-align: center;
  /* md/14px */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const FreindListBar = ({ userName, userImg, isNotFriend, isWithFriend }) => {
  return (
    <ListWrapper>
      <FriendInfo>
        <img src={userImg} alt="친구 프로필" />
        <span>{userName}</span>
      </FriendInfo>
      {isWithFriend && <WithFriendMark>챌린지</WithFriendMark>}
      {isNotFriend && <NotFriendMark>친구추가</NotFriendMark>}
    </ListWrapper>
  );
};

export default FreindListBar;
