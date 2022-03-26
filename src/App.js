import { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sideBar";
import Login from "./components/login";
import Modal from "./components/modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
function App() {
  const [header, setHeader] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <>
            {header && <Header />}
            {!header && <Sidebar />}
            <main className={header ? "main_component" : "main"}>
              <Route path="/" exact>
                {/* {forgotPassword && <Modal />} */}
              </Route>
              <Route path="/login" exact>
                {!forgotPassword && <Login onForgotPassword={setForgotPassword} />}
                {forgotPassword && <Modal />}
              </Route>
            </main>
          </>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
