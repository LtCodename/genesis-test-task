import React, { useState, useEffect } from "react";
import "./RewardItem.css";

interface IRewardItem {
  text: string;
  itemIndex: number;
  questionIndex: number;
}

const RewardItem: React.FC<IRewardItem> = ({
  text,
  itemIndex,
  questionIndex,
}) => {
  const [rewardItemClass, setRewardItemClass] = useState("reward-item");

  useEffect(() => {
    if (itemIndex === questionIndex) {
      setRewardItemClass("reward-item reward-item-current");
    } else if (itemIndex < questionIndex) {
      setRewardItemClass("reward-item reward-item-done");
    }
  }, [questionIndex, itemIndex]);

  return (
    <span className={rewardItemClass}>
      {`$`}
      {text}
    </span>
  );
};

export default RewardItem;
