import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

import Home from "../routes/Home";
import TV from "../routes/TV";
import Search from "../routes/Search";
import Detail from "../routes/Detail";
// 오로지 라우터만 관리하는 컴포넌트가 될 것 이다.
export default () => (
  <Router>
    <>
      <Header />
      {/* 기본적으로 Switch가 없이 라우터를 배치하면 모든 라우터를 탄다.
    Switch를 활용하면 오로지 하나의 라우터만 타게된다.
    */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/show/:id" exact component={Detail} />
      </Switch>
    </>
  </Router>
);
