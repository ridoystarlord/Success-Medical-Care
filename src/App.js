import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Aboutus from "./components/Aboutus/Aboutus";
import Footer from "./components/common/Footer/Footer";
import Footerwidget from "./components/common/Footerwidget/Footerwidget";
import Header from "./components/common/Header/Header";
import Login from "./components/common/UserAuthentication/Login/Login";
import PrivateRoute from "./components/common/UserAuthentication/PrivateRoute/PrivateRoute";
import Register from "./components/common/UserAuthentication/Register/Register";
import Fixappointment from "./components/Fixappointment/Fixappointment";
import Home from "./components/homepage/Home/Home";
import Testdetails from "./components/homepage/Testdetails/Testdetails";
import Testpricing from "./components/homepage/Testpricing/Testpricing";
import Notfound from "./components/Notfound/Notfound";
import Ourdoctors from "./components/Ourdoctors/Ourdoctors";
import Placeorder from "./components/Placeorder/Placeorder";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/our-doctors">
              <Ourdoctors></Ourdoctors>
            </Route>
            <Route path="/fix-appointement">
              <Fixappointment></Fixappointment>
            </Route>
            <Route path="/about-us">
              <Aboutus></Aboutus>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/pricing">
              <Testpricing></Testpricing>
            </Route>
            <Route path="/placeorder">
              <Placeorder></Placeorder>
            </Route>
            <PrivateRoute path="/testlist/:id">
              <Testdetails></Testdetails>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footerwidget></Footerwidget>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
