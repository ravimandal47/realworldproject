import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
 

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
 
// Pages
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Page404 from "./components/page404/Page404";
 
const App = () => {
  const isLoggedIn=true;
    return (
            <>
         <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter> 
          <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          { 
            isLoggedIn===false?
            <Route path="/" render={(props) => <AdminLayout {...props} />} />
           :
            <Route exact path="/" name="Login Page" component={Login} />
          }
          {/* <Redirect from="/admin" to="/admin/dashboard" />  */}
              <Route exact path="/login" name="Login Page" component={Login} />
              <Route exact path="/register" name="Register Page" component={Register} />
              <Route exact path="/404" name="Page 404" component={Page404} />
        </Switch>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,   
        </>
    )
} 

export default App

