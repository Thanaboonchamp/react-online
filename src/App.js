import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import DetailPage from "./pages/DetailPage";
import ContactPage from "./pages/ContactPage";
import HospitalPage from "./pages/Hospital/HospitalPage";
import CategoryPage from './pages/Category/CategoryPage';
import IndexPage from "./pages/Category/IndexPage";
import CreatePage from "./pages/Category/CreatePage";
import EditPage from "./pages/Category/EditPage";
import UploadPage from "./pages/UploadPage";
import { ToastProvider} from 'react-toast-notifications';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MemberPage from "./pages/MemberPage";
import PrivateRoute from "./guard/auth";
import UserStoreProvider from './context/UserContext';

function App() {
  return (
    <UserStoreProvider>
    <ToastProvider placement='top-center'>
      <Router>
          <NavBar/>
          <Switch>
            <Route exact path='/'><HomePage/></Route>
            <Route path='/product'><ProductPage/></Route>
            <Route path='/about'><AboutPage/></Route>
            <Route path='/detail/:id/title/:title'><DetailPage/></Route>
            <Route path='/contact'><ContactPage/></Route>
            <Route path='/hospital'><HospitalPage/></Route>
            <Route path='/upload'><UploadPage></UploadPage></Route>
            <Route path='/register'><RegisterPage/></Route>
            <Route path='/login'><LoginPage/></Route>
            <PrivateRoute path='/member'><MemberPage/></PrivateRoute>
            {/*<Route path='/category'><indexPage/></Route>*/}
            <Route path='/category' render={ ({match : {url}}) => (
              <>
              <Route path={`${url}/`} exact><IndexPage></IndexPage></Route>
              <Route path={`${url}/create`}><CreatePage></CreatePage></Route>
              <Route path={`${url}/edit/:id`}><EditPage></EditPage></Route>
              </>
            )}></Route>
        </Switch>
        <Footer/>
    </Router>
    </ToastProvider>
    </UserStoreProvider>
  );
}

export default App;
