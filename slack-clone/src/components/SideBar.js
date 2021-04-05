import { Apps, BookmarkBorder, Create, Drafts, ExpandLess, FiberManualRecordRounded, FileCopy, Inbox, InsertComment, PeopleAlt } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import SideBarOption from "./SideBarOption";
function SideBar() {
  return (
    <SidebarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Test user company</h2>
          <h3>
            <FiberManualRecordRounded />
            Test user name
          </h3>
        </SideBarInfo>
        <Create />
      </SideBarHeader>
      <SideBarOption Icon= {InsertComment} title='Threads'/>
      <SideBarOption Icon= {Inbox} title='Mentions & reactions'/>
      <SideBarOption Icon= {Drafts} title='Saved items'/>
      <SideBarOption Icon= {BookmarkBorder} title='Channel browser'/>
      <SideBarOption Icon= {PeopleAlt} title='People & user groups'/>
      <SideBarOption Icon= {Apps} title='Apps'/>
      <SideBarOption Icon= {FileCopy} title='File browser'/>
      <SideBarOption Icon= {ExpandLess} title='Show less'/>

    </SidebarContainer>
  );
}

export default SideBar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`;
const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    background-color: white;
    font-size: 18px;
    border-radius: 999px;
  }
`;
const SideBarInfo = styled.div`
flex: 1;
>h2{
    font-size: 15px;
    font-weight: 900;
    align-items: center;
}
> h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}
>h3 > .MuiSvgIcon-root {
    font-size :14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
}
`;
// const SidebarContainer = styled.div``;
