import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const button = makeStyles({
  root: {
    padding: "5px 5px",
    maxHeight: "25px",
  },
});

export const Popup = (props) => {
  const { title, children, openPopup, setPopup } = props;
  const buttonStyle = button();
  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography style={{ flexGrow: 1 }}>{title}</Typography>
          <div
            className="btn btn-danger"
            style={{ padding: "0px 5px" }}
            onClick={() => setPopup(false)}
          >
            X
          </div>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};
