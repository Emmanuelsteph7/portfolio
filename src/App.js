import Home from "pages/home/Home";
import Portfolio from "pages/portfolio/Portfolio";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/portfolio/:id" exact component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
