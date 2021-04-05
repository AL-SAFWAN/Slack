import { Avatar } from "@material-ui/core";
import { AccessTime } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        //TODO:  add onClick
        />
        <AccessTime />
      </HeaderLeft>
      {/* Search Bar */}
      {/* Header Right */}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover{
    opacity: 0.8;
}
`;
