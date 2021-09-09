import { AnimateSkills } from "components/index";
import Home from "pages/home/Home";
import Portfolio from "pages/portfolio/Portfolio";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <main className="app__container">
        <AnimateSkills />
        <Switch>
          <Route path="/portfolio/:id" exact component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </>
  );
};

export default App;
