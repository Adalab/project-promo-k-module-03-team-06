import CardCreator from "./CardCreator";
import Landing from "./Landing";
import { Switch, Route } from "react-router-dom";

const App = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/PetCodeGirls-Card-Creator"
          component={CardCreator}
        />
      </Switch>
    </>
  );
};

export default App;
