import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

// Pages
const Login = React.lazy(() => import('./components/login/Login'));
const Register = React.lazy(() => import('./components/register/Register'));
const Page404 = React.lazy(() => import('./components/page404/Page404'));
const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

const App = () => {
    return (
        <>
         <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
          {/* <Redirect from="/" to="/admin/dashboard" /> */}

            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
        </Switch>
        </React.Suspense>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,   
        </>
    )
}

export default App

