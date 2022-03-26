import { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sideBar";
import Login from "./components/login";
import Modal from "./components/modal";
import SuccessModal from "./components/successModal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Redirect } from "react-router-dom";
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
              <Route path="/" exact></Route>
              <Route path="/login" exact>
                {!forgotPassword && (
                  <Login login={setLogin} onHeader={setHeader} onForgotPassword={setForgotPassword} />
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
