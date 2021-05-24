import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Profile from "./pages/Profile";

import "./App.css";
import UserPage from "./pages/UserPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/users/:userId">
              <UserPage />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
