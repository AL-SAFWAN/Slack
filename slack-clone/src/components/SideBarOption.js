import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { db } from "../firebase";

function SideBarOption({ Icon, title, addChannelOption, id }) {
  const [open, setOpen] = React.useState(false);
  const channelName = React.useRef("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const openChannel = () => {};

  const addChannel = () => {
    if (channelName.current === "") {
      alert("enter a channel name");
      return;
    }
    if (channelName.current) {
      db.collection("room").add({
        name: channelName.current,
      });
    }
    setOpen(false);
    channelName.current = "";
  };
  const selectChannel = () => {};

  return (
    <>
      {open && (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>Type in the Channels name</DialogContentText>
              <TextField
                autoFocus
                // fullWidth
                onChange={(e) => (channelName.current = e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={addChannel} color="primary">
                add
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
      <SideBarOptionContainer
        onClick={addChannelOption ? handleClickOpen : selectChannel}
      >
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionsChannel>
            <span>#</span> {title}
          </SidebarOptionsChannel>
        )}
      </SideBarOptionContainer>
    </>
  );
}

export default SideBarOption;

const SideBarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionsChannel = styled.h3`
padding: 10px 0;
font-weight: 300;
`;
