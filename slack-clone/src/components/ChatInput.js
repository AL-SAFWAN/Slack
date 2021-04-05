import { Button } from "@material-ui/core";
import React, { useRef } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase";

function ChatInput({ channelName, channelId, chatRef }) {
  const inputRef = useRef("");
  console.log(channelId);

  const sendMessage = (e) => {
    e.preventDefault(); //prevent refresh
    console.log(channelId, inputRef.current.value);

    if (!channelId || inputRef.current.value === "") {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "TEST",
      userImage:
        "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/blackhole.png?itok=THJrwcHP",
    });
    console.log(inputRef.current.value);

      chatRef?.current?.scrollIntoView({
        behaviour: "smooth",
      })
    inputRef.current.value = "";
  };

  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} placeholder={`Message #${channelName}`} />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 70%;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
