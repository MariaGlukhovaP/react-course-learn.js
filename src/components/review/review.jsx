import { Card } from "../card/card";

import { UserContainer } from "../user/user-container";

export const Review = ({ userId, text, rating }) => {
  return (
    <Card
      cardTitle={text}
      cardFirstRowItem={<UserContainer userId={userId} />}
      cardSideItem={`${rating} ★`}
    />
  );
};
