import { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sideBar";
import Login from "./components/login";
import Modal from "./components/modal";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Rides from "./pages/rides";
import Events from "./pages/events";
import Create from "./pages/create";
import Users from "./pages/users";
import Suggestions from "./pages/suggestions";
import Requests from "./pages/requests";
import Payment from "./pages/payments";
import Loader from "./components/loader";
import "./App.css";

function App() {
  const [header, setHeader] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <>
            {header && <Header />}
            {!header && <Sidebar />}
            <main className={header ? "main_component" : "main"}>
              <Route path="/dashboard" exact>
                <Dashboard />
              </Route>
              <Route path="/profile" exact>
                <Profile />
              </Route>
              <Route path="/rides" exact>
                <Rides />
              </Route>
              <Route path="/events" exact>
                <Events />
              </Route>
              <Route path="/create" exact>
                <Create />
              </Route>
              <Route path="/users" exact>
                <Users />
              </Route>
              <Route path="/suggestions" exact>
                <Suggestions />
              </Route>
              <Route path="/requests" exact>
                <Requests />
              </Route>
              <Route path="/payments" exact>
                <Payment />
              </Route>
              <Route path="/login" exact>
                {!forgotPassword && (
                  <Login login={setLogin} onHeader={setHeader} onForgotPassword={setForgotPassword} />
                  // <Loader />
                )}
                {forgotPassword && <Modal setForgotPassword={setForgotPassword} />}
              </Route>
              {!login && <Redirect to="/login" />}
            </main>
          </>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
