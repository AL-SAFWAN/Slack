import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
function Chat() {
  return (
    <ChatContainer>
        <>
      <HeaderContainer>
        <HeaderLeft>
          <h4>
            <strong>#Room-name</strong>
          </h4>
          <StarBorderOutlined></StarBorderOutlined>
        </HeaderLeft>
        <HeaderRight>
          <p>
            {" "}
            <InfoOutlined /> Details
          </p>
        </HeaderRight>
      </HeaderContainer>
      <ChatMessages>
          {/* List out all the messaging */}
      </ChatMessages>
      </>
    </ChatContainer>
  );
}

export default Chat;
const ChatMessages = styled.div``

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px
  }
  > h4 > .MuiSVGIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
> p {
    display: flex;
    align-items: center;
    font-size: 14px;
}
> p > .MuiSVGIcon-root {
    margin-right: 5px!important;
    font-size: 16px;
    
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 65px;
`;
