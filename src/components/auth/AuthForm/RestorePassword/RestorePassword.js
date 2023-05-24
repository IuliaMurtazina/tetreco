import React from "react";
import { Button } from "@mui/material";
import classes from "./RestorePassword.module.scss";

const RestorePassword = () => {
  return (
    <div className={classes.container}>
      <span>Forgot password?</span>
      <Button
        variant="text"
        size="small"
        onClick={() => {}}
        sx={{ marginTop: "2px" }}
      >
        Restore
      </Button>
    </div>
  );
};

export default RestorePassword;
