import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/ProductPage">
          <ProductPage />
        </Route>
        <Route exact path="/Login">
          <LoginPage />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
