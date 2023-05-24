import React from "react";
import classes from "./UserTips.module.scss";

const UserTips = () => {
  return (
    <div className={classes.user}>
      <img src="/img/user.png"></img>
      <div className={classes.tips}>
        <div className={classes.tip}>
          <img src="/img/tip-1.png"></img>
          <p>New and actual announcements</p>
        </div>
        <div className={classes.tip}>
          <img src="/img/tip-2.png"></img>
          <p>Free announcements all over Russia</p>
        </div>
        <div className={classes.tip}>
          <img src="/img/tip-3.png"></img>
          <p>You&apos;ll find you&apos;ve been looking for</p>
        </div>
      </div>
    </div>
  );
};

export default UserTips;
