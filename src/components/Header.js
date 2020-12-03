import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  text-align: center;
  height: 50px;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// 라우터로 인해 컴포넌트가 교체되면 Header에 변화를 줘야 한다.
//    탭 아래에 파란색 밑줄이 생기게 효과를 줄 것이다.
// 어떠한 라우터로 이동하는지 알아야 하기 때문에 withRouter를 사용해야 한다.
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <StyledLink to="/">영화</StyledLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <StyledLink to="/tv">TV</StyledLink>
      </Item>
      <Item current={pathname === "/search"}>
        <StyledLink to="/search">검색</StyledLink>
      </Item>
    </List>
  </Header>
));
